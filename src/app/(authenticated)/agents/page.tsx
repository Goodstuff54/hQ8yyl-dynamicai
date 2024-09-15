'use client'

import { Prisma } from '@prisma/client'
import { Typography, Table, Space, Button, Popconfirm, Switch } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AgentManagementPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: agents,
    isLoading,
    refetch,
  } = Api.agent.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const { mutateAsync: updateAgent } = Api.agent.update.useMutation()
  const { mutateAsync: deleteAgent } = Api.agent.delete.useMutation()

  const handleEdit = (agentId: string) => {
    router.push(`/agents/${agentId}/configure`)
  }

  const handleTogglePause = async (agent: Prisma.AgentGetPayload<{}>) => {
    try {
      await updateAgent({
        where: { id: agent.id },
        data: { status: agent.status === 'active' ? 'paused' : 'active' },
      })
      await refetch()
      enqueueSnackbar(
        `Agent ${agent.status === 'active' ? 'paused' : 'activated'} successfully`,
        { variant: 'success' },
      )
    } catch (error) {
      enqueueSnackbar('Failed to update agent status', { variant: 'error' })
    }
  }

  const handleDelete = async (agentId: string) => {
    try {
      await deleteAgent({ where: { id: agentId } })
      await refetch()
      enqueueSnackbar('Agent deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete agent', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: Prisma.AgentGetPayload<{}>) => (
        <Switch
          checked={status === 'active'}
          onChange={() => handleTogglePause(record)}
          checkedChildren={<PlayCircleOutlined />}
          unCheckedChildren={<PauseCircleOutlined />}
        />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Prisma.AgentGetPayload<{}>) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record.id)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this agent?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Agent Management</Title>
      <Paragraph>View and manage all your created agents here.</Paragraph>
      <Table
        columns={columns}
        dataSource={agents}
        rowKey="id"
        loading={isLoading}
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
      />
    </PageLayout>
  )
}
