'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import {
  Typography,
  Form,
  Input,
  Select,
  Button,
  Space,
  Card,
  Row,
  Col,
} from 'antd'
import { UserOutlined, FunctionOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AgentConfigurationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const agentId = params.agentId

  const {
    data: agent,
    isLoading,
    refetch,
  } = Api.agent.findUnique.useQuery({
    where: { id: agentId },
    include: { user: true },
  })

  const { mutateAsync: updateAgent } = Api.agent.update.useMutation()

  const [targetAudience, setTargetAudience] = useState('')
  const [functionalities, setFunctionalities] = useState<string[]>([])
  const [appearance, setAppearance] = useState('')

  useEffect(() => {
    if (agent) {
      form.setFieldsValue({
        name: agent.name,
        description: agent.description,
        targetAudience: targetAudience,
        functionalities: functionalities,
        appearance: appearance,
      })
    }
  }, [agent, form, targetAudience, functionalities, appearance])

  const handleSubmit = async (values: any) => {
    try {
      await updateAgent({
        where: { id: agentId },
        data: {
          name: values.name,
          description: values.description,
        },
      })
      setTargetAudience(values.targetAudience)
      setFunctionalities(values.functionalities)
      setAppearance(values.appearance)
      enqueueSnackbar('Agent configuration updated successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update agent configuration', {
        variant: 'error',
      })
    }
  }

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Card>
        <Title level={2}>Configure Your Agent</Title>
        <Paragraph>
          Customize your agent's settings to optimize its performance and align
          it with your brand.
        </Paragraph>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Agent Name"
                rules={[
                  { required: true, message: 'Please input the agent name!' },
                ]}
              >
                <Input prefix={<EditOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="targetAudience"
            label="Target Audience"
            rules={[
              {
                required: true,
                message: 'Please specify the target audience!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="e.g., Young professionals, Seniors, etc."
            />
          </Form.Item>
          <Form.Item
            name="functionalities"
            label="Functionalities"
            rules={[
              {
                required: true,
                message: 'Please select at least one functionality!',
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Select functionalities"
              prefix={<FunctionOutlined />}
            >
              <Select.Option value="chat_support">Chat Support</Select.Option>
              <Select.Option value="lead_capture">Lead Capture</Select.Option>
              <Select.Option value="faq">FAQ</Select.Option>
              <Select.Option value="product_recommendations">
                Product Recommendations
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="appearance"
            label="Appearance and Behavior"
            rules={[
              {
                required: true,
                message: 'Please describe the appearance and behavior!',
              },
            ]}
          >
            <Input.TextArea placeholder="Describe how you want your agent to look and behave" />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save Configuration
              </Button>
              <Button onClick={() => router.push('/agents')}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </PageLayout>
  )
}
