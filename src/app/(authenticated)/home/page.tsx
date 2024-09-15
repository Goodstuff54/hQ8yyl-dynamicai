'use client'

import { Typography, Card, Row, Col, Button, Statistic } from 'antd'
import {
  PlusOutlined,
  SettingOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: agents, isLoading } = Api.agent.findMany.useQuery({
    where: { userId: user?.id },
    include: { analyticss: true },
  })

  const handleCreateAgent = () => {
    router.push('/create-agent')
  }

  const handleManageAgents = () => {
    router.push('/agents')
  }

  const renderAgentCards = () => {
    if (isLoading) {
      return <Text>Loading agents...</Text>
    }

    if (!agents || agents.length === 0) {
      return (
        <Text>No agents found. Create your first agent to get started!</Text>
      )
    }

    return agents.map(agent => (
      <Col key={agent.id} xs={24} sm={12} md={8} lg={6}>
        <Card
          title={agent.name}
          extra={
            <Button
              icon={<SettingOutlined />}
              onClick={() => router.push(`/agents/${agent.id}/configure`)}
            >
              Configure
            </Button>
          }
          actions={[
            <Button
              key="analytics"
              icon={<BarChartOutlined />}
              onClick={() => router.push(`/agents/${agent.id}/analytics`)}
            >
              Analytics
            </Button>,
          ]}
        >
          <Text>{agent.description}</Text>
          <Statistic
            title="Total Conversations"
            value={
              agent.analyticss?.filter(
                a => a.metricName === 'totalConversations',
              )[0]?.metricValue || '0'
            }
          />
          <Text type="secondary">
            Created on: {dayjs(agent.dateCreated).format('MMMM D, YYYY')}
          </Text>
        </Card>
      </Col>
    ))
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>AI Agents Dashboard</Title>
      <Text>
        Welcome to your AI agents dashboard. Here you can view and manage your
        agents.
      </Text>

      <Row
        gutter={[16, 16]}
        style={{ marginTop: '24px', marginBottom: '24px' }}
      >
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreateAgent}
          >
            Create New Agent
          </Button>
        </Col>
        <Col>
          <Button icon={<SettingOutlined />} onClick={handleManageAgents}>
            Manage Agents
          </Button>
        </Col>
      </Row>

      <Title level={3}>Your Agents</Title>
      <Row gutter={[16, 16]}>{renderAgentCards()}</Row>
    </PageLayout>
  )
}
