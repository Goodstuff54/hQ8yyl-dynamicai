'use client'

import { Typography, Card, Row, Col, Statistic, Spin } from 'antd'
import { LineChartOutlined, InteractionOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AgentAnalyticsPage() {
  const router = useRouter()
  const params = useParams<{ agentId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: agent, isLoading: isLoadingAgent } =
    Api.agent.findUnique.useQuery({
      where: { id: params.agentId },
      include: { analyticss: true },
    })

  const { data: analytics, isLoading: isLoadingAnalytics } =
    Api.analytics.findMany.useQuery({
      where: { agentId: params.agentId },
      orderBy: { dateCreated: 'desc' },
      take: 30,
    })

  if (isLoadingAgent || isLoadingAnalytics) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!agent) {
    enqueueSnackbar('Agent not found', { variant: 'error' })
    router.push('/agents')
    return null
  }

  const totalInteractions = analytics?.length || 0
  const averageResponseTime =
    analytics?.reduce(
      (acc, curr) => acc + parseFloat(curr.metricValue || '0'),
      0,
    ) / totalInteractions || 0

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Agent Analytics: {agent.name}</Title>
      <Paragraph>
        Track real-time performance metrics and user engagement data for your
        agent.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Total Interactions"
              value={totalInteractions}
              prefix={<InteractionOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Average Response Time"
              value={averageResponseTime.toFixed(2)}
              suffix="ms"
              prefix={<LineChartOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Title level={3} style={{ marginTop: '24px' }}>
        Recent Analytics
      </Title>
      <Row gutter={[16, 16]}>
        {analytics?.map(analytic => (
          <Col xs={24} sm={12} md={8} key={analytic.id}>
            <Card
              title={analytic.metricName}
              extra={dayjs(analytic.dateCreated).format('YYYY-MM-DD HH:mm')}
            >
              <Statistic
                value={parseFloat(analytic.metricValue || '0').toFixed(2)}
                suffix={
                  analytic.metricName?.toLowerCase().includes('time')
                    ? 'ms'
                    : ''
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
