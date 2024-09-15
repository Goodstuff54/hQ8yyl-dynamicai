'use client'

import { Typography, Card, Row, Col, Input, List } from 'antd'
import {
  QuestionCircleOutlined,
  BookOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HelpCenterPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchTerm, setSearchTerm] = useState('')

  const { data: tutorials, isLoading: tutorialsLoading } =
    Api.tutorial.findMany.useQuery({})
  const { data: faqs, isLoading: faqsLoading } = Api.faq.findMany.useQuery({})

  const filteredTutorials = tutorials?.filter(
    tutorial =>
      tutorial.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredFaqs = faqs?.filter(
    faq =>
      faq.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Help Center</Title>
      <Paragraph>
        Find tutorials, guides, and answers to common questions to help you use
        our platform effectively.
      </Paragraph>

      <Input
        placeholder="Search for tutorials or FAQs"
        prefix={<SearchOutlined />}
        style={{ marginBottom: 24 }}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <BookOutlined /> Tutorials and Guides
              </>
            }
          >
            <List
              loading={tutorialsLoading}
              dataSource={filteredTutorials}
              renderItem={tutorial => (
                <List.Item>
                  <List.Item.Meta
                    title={tutorial.title}
                    description={tutorial.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <QuestionCircleOutlined /> Frequently Asked Questions
              </>
            }
          >
            <List
              loading={faqsLoading}
              dataSource={filteredFaqs}
              renderItem={faq => (
                <List.Item>
                  <List.Item.Meta
                    title={faq.question}
                    description={faq.answer}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
