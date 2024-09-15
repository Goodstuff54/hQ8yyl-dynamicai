'use client'

import { Typography, Button, Card, Space, Spin, Alert } from 'antd'
import {
  RocketOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AgentDeploymentPage() {
  const router = useRouter()
  const params = useParams<{ agentId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [deploymentStatus, setDeploymentStatus] = useState<
    'idle' | 'deploying' | 'success' | 'error'
  >('idle')
  const [deploymentError, setDeploymentError] = useState<string | null>(null)

  const { data: agent, isLoading: isLoadingAgent } =
    Api.agent.findUnique.useQuery({
      where: { id: params.agentId },
    })

  const { mutateAsync: deployAgent } = Api.agent.update.useMutation()

  useEffect(() => {
    if (agent?.status === 'deployed') {
      setDeploymentStatus('success')
    }
  }, [agent])

  const handleDeploy = async () => {
    try {
      setDeploymentStatus('deploying')
      await deployAgent({
        where: { id: params.agentId },
        data: { status: 'deployed' },
      })
      setDeploymentStatus('success')
      enqueueSnackbar('Agent deployed successfully!', { variant: 'success' })
    } catch (error) {
      setDeploymentStatus('error')
      setDeploymentError('Failed to deploy agent. Please try again.')
      enqueueSnackbar('Failed to deploy agent', { variant: 'error' })
    }
  }

  if (isLoadingAgent) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Deploy Your Agent</Title>
        <Paragraph>
          Deploy your configured agent with one click to quickly launch it on
          the chosen platform.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Title level={4}>{agent?.name}</Title>
            <Paragraph>{agent?.description}</Paragraph>

            {deploymentStatus === 'idle' && (
              <Button
                type="primary"
                icon={<RocketOutlined />}
                onClick={handleDeploy}
                size="large"
              >
                Deploy Agent
              </Button>
            )}

            {deploymentStatus === 'deploying' && (
              <Spin size="large" tip="Deploying your agent..." />
            )}

            {deploymentStatus === 'success' && (
              <Alert
                message="Deployment Successful"
                description="Your agent has been successfully deployed and is now running."
                type="success"
                showIcon
                icon={<CheckCircleOutlined />}
              />
            )}

            {deploymentStatus === 'error' && (
              <Alert
                message="Deployment Failed"
                description={deploymentError}
                type="error"
                showIcon
                icon={<CloseCircleOutlined />}
              />
            )}
          </Space>
        </Card>

        {deploymentStatus === 'success' && (
          <Button
            onClick={() => router.push(`/agents/${params.agentId}/analytics`)}
          >
            View Agent Analytics
          </Button>
        )}
      </Space>
    </PageLayout>
  )
}
