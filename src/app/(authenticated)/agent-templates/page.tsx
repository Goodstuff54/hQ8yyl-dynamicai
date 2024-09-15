'use client'

import { Typography, Card, Row, Col, Button, Modal, Form, Input } from 'antd'
import { EditOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AgentTemplatesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState<any>(null)

  const {
    data: templates,
    isLoading,
    refetch,
  } = Api.template.findMany.useQuery({
    where: { userId: user?.id },
  })

  const { mutateAsync: createTemplate } = Api.template.create.useMutation()
  const { mutateAsync: updateTemplate } = Api.template.update.useMutation()
  const { mutateAsync: deleteTemplate } = Api.template.delete.useMutation()

  const handleCreateTemplate = async (values: any) => {
    try {
      await createTemplate({ data: { ...values, userId: user?.id } })
      enqueueSnackbar('Template created successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to create template', { variant: 'error' })
    }
  }

  const handleEditTemplate = (template: any) => {
    setEditingTemplate(template)
    setEditModalVisible(true)
  }

  const handleUpdateTemplate = async (values: any) => {
    try {
      await updateTemplate({ where: { id: editingTemplate.id }, data: values })
      enqueueSnackbar('Template updated successfully', { variant: 'success' })
      setEditModalVisible(false)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to update template', { variant: 'error' })
    }
  }

  const handleDeleteTemplate = async (id: string) => {
    try {
      await deleteTemplate({ where: { id } })
      enqueueSnackbar('Template deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete template', { variant: 'error' })
    }
  }

  const handleDuplicateTemplate = async (template: any) => {
    try {
      const { id, ...templateData } = template
      await createTemplate({
        data: {
          ...templateData,
          name: `${templateData.name} (Copy)`,
          userId: user?.id,
        },
      })
      enqueueSnackbar('Template duplicated successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to duplicate template', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Agent Templates</Title>
      <Paragraph>
        Browse and select from various agent templates or customize existing
        ones to fit your needs.
      </Paragraph>

      <Row gutter={[16, 16]}>
        {templates?.map(template => (
          <Col xs={24} sm={12} md={8} key={template.id}>
            <Card
              title={template.name}
              extra={
                <>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => handleEditTemplate(template)}
                  />
                  <Button
                    icon={<CopyOutlined />}
                    onClick={() => handleDuplicateTemplate(template)}
                  />
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeleteTemplate(template.id)}
                    danger
                  />
                </>
              }
            >
              <Paragraph ellipsis={{ rows: 3 }}>{template.content}</Paragraph>
              <Button
                type="primary"
                onClick={() =>
                  router.push(`/create-agent?templateId=${template.id}`)
                }
              >
                Use Template
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Button
        type="primary"
        onClick={() => setEditModalVisible(true)}
        style={{ marginTop: 16 }}
      >
        Create New Template
      </Button>

      <Modal
        title={editingTemplate ? 'Edit Template' : 'Create New Template'}
        visible={editModalVisible}
        onCancel={() => {
          setEditModalVisible(false)
          setEditingTemplate(null)
        }}
        footer={null}
      >
        <Form
          initialValues={editingTemplate}
          onFinish={
            editingTemplate ? handleUpdateTemplate : handleCreateTemplate
          }
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Template Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="Template Content"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingTemplate ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
