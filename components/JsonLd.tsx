import { Organization, WithContext } from 'schema-dts'

type JsonLdProps = {
  data: WithContext<Organization>
}

export default function JsonLd({ data }: JsonLdProps) {
  const jsonString = JSON.stringify(data, null, 2)
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
      key="jsonld-organization"
    />
  )
} 