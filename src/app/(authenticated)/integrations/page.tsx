'use client'

import { Typography, Button, List, Card, Space, Modal, Form, Input } from 'antd'
import { PlusOutlined, LinkOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function IntegrationHubPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const {
    data: integrations,
    isLoading,
    refetch,
  } = Api.integration.findMany.useQuery({
    where: { userId: user?.id },
    include: { platform: true },
  })

  const { mutateAsync: createIntegration } =
    Api.integration.create.useMutation()
  const { mutateAsync: deleteIntegration } =
    Api.integration.delete.useMutation()

  const handleConnect = async (values: {
    name: string
    description: string
    platformId: string
  }) => {
    try {
      await createIntegration({
        data: {
          ...values,
          user: { connect: { id: user?.id } },
          platform: { connect: { id: values.platformId } },
        },
      })
      enqueueSnackbar('Integration connected successfully', {
        variant: 'success',
      })
      setIsModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to connect integration', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteIntegration({ where: { id } })
      enqueueSnackbar('Integration deleted successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete integration', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Integration Hub</Title>
        <Text>
          Connect and manage your integrations to set up automations for your
          agents.
        </Text>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Connect New Integration
        </Button>

        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }}
          dataSource={integrations}
          loading={isLoading}
          renderItem={integration => (
            <List.Item>
              <Card
                title={integration.name}
                extra={
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(integration.id)}
                  />
                }
              >
                <p>{integration.description}</p>
                <Text type="secondary">
                  Platform: {integration.platform?.name}
                </Text>
              </Card>
            </List.Item>
          )}
        />

        <Modal
          title="Connect New Integration"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleConnect} layout="vertical">
            <Form.Item
              name="name"
              label="Integration Name"
              rules={[
                {
                  required: true,
                  message: 'Please input the integration name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: 'Please input the description!' },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="platformId"
              label="Platform"
              rules={[
                { required: true, message: 'Please select the platform!' },
              ]}
            >
              <Input placeholder="Platform ID (e.g., make.com)" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<LinkOutlined />}>
                Connect
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Space>
    </PageLayout>
  )
}
