'use client'

import { useState, useEffect } from 'react'
import { Typography, Upload, List, Button, Space, Modal, Input } from 'antd'
import {
  UploadOutlined,
  DeleteOutlined,
  EditOutlined,
  TagOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function RAGContextManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [files, setFiles] = useState<any[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingFile, setEditingFile] = useState<any>(null)
  const [newTags, setNewTags] = useState('')

  const {
    data: ragVectors,
    isLoading,
    refetch,
  } = Api.ragVector.findMany.useQuery({})
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()
  const { mutateAsync: deleteRagVector } = Api.ragVector.delete.useMutation()
  const { mutateAsync: updateRagVector } = Api.ragVector.update.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  useEffect(() => {
    if (ragVectors) {
      setFiles(ragVectors)
    }
  }, [ragVectors])

  const handleUpload = async (info: any) => {
    const { file } = info
    try {
      const { url } = await upload({ file })
      const { key } = await loadFile({ url })
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error uploading file', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteRagVector({ where: { id } })
      enqueueSnackbar('File deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting file', { variant: 'error' })
    }
  }

  const showEditModal = (file: any) => {
    setEditingFile(file)
    setNewTags(file.tags.join(', '))
    setIsModalVisible(true)
  }

  const handleEditTags = async () => {
    if (editingFile) {
      try {
        const updatedTags = newTags.split(',').map(tag => tag.trim())
        await updateRagVector({
          where: { id: editingFile.id },
          data: { tags: updatedTags },
        })
        enqueueSnackbar('Tags updated successfully', { variant: 'success' })
        setIsModalVisible(false)
        refetch()
      } catch (error) {
        enqueueSnackbar('Error updating tags', { variant: 'error' })
      }
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>RAG Context Management</Title>
      <Text>
        Upload and manage files for your AI agents to access and utilize.
      </Text>

      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', marginTop: '2rem' }}
      >
        <Upload customRequest={handleUpload} showUploadList={false}>
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </Upload>

        <List
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={files}
          renderItem={(file: any) => (
            <List.Item
              actions={[
                <Button
                  key="edit"
                  icon={<EditOutlined />}
                  onClick={() => showEditModal(file)}
                >
                  Edit Tags
                </Button>,
                <Button
                  key="delete"
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() => handleDelete(file.id)}
                >
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={file.key}
                description={
                  <Space direction="vertical">
                    <Text>
                      Uploaded on:{' '}
                      {dayjs(file.dateCreated).format('MMMM D, YYYY')}
                    </Text>
                    <Space>
                      <TagOutlined />
                      <Text>{file.tags.join(', ')}</Text>
                    </Space>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </Space>

      <Modal
        title="Edit Tags"
        visible={isModalVisible}
        onOk={handleEditTags}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="Enter tags, separated by commas"
          value={newTags}
          onChange={e => setNewTags(e.target.value)}
        />
      </Modal>
    </PageLayout>
  )
}
