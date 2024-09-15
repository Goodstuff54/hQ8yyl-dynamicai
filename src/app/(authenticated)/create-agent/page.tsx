'use client'

import { useState } from 'react'
import { Typography, Form, Input, Select, Button, Space } from 'antd'
import {
  RobotOutlined,
  SendOutlined,
  TemplateOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function CreateAgentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const { data: templates, isLoading: templatesLoading } =
    Api.template.findMany.useQuery({
      where: { userId: user?.id },
    })

  const { mutateAsync: createAgent } = Api.agent.create.useMutation()

  const handleSubmit = async (values: any) => {
    setLoading(true)
    try {
      const newAgent = await createAgent({
        data: {
          name: values.name,
          description: values.description,
          userId: user?.id,
          // Add other fields as necessary
        },
      })
      enqueueSnackbar('Agent created successfully!', { variant: 'success' })
      router.push(`/agents/${newAgent.id}/configure`)
    } catch (error) {
      enqueueSnackbar('Failed to create agent', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Create a New AI Agent</Title>
        <Paragraph>
          Build an AI agent tailored to your needs by providing the requirements
          and selecting the target platform.
        </Paragraph>

        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="name"
            label="Agent Name"
            rules={[
              { required: true, message: 'Please input the agent name!' },
            ]}
          >
            <Input prefix={<RobotOutlined />} placeholder="Enter agent name" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Agent Description"
            rules={[
              {
                required: true,
                message: 'Please input the agent description!',
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Describe your agent's purpose and capabilities"
            />
          </Form.Item>

          <Form.Item
            name="platform"
            label="Target Platform"
            rules={[
              { required: true, message: 'Please select a target platform!' },
            ]}
          >
            <Select placeholder="Select target platform">
              <Select.Option value="whatsapp">WhatsApp</Select.Option>
              <Select.Option value="facebook">Facebook</Select.Option>
              <Select.Option value="instagram">Instagram</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="template" label="Agent Template">
            <Select
              loading={templatesLoading}
              placeholder="Select a pre-defined template (optional)"
            >
              {templates?.map(template => (
                <Select.Option key={template.id} value={template.id}>
                  {template.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
                loading={loading}
              >
                Create Agent
              </Button>
              <Button
                icon={<TemplateOutlined />}
                onClick={() => router.push('/agent-templates')}
              >
                View Templates
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Space>
    </PageLayout>
  )
}
