import { MDXRemote } from 'next-mdx-remote/rsc'
import { Card, CardContent } from "@/components/ui/card"
import { readFileSync } from 'fs'
import path from 'path'

export const metadata = {
  title: 'Privacy Policy | ByteCraft',
  description: 'Privacy policy for our mobile applications',
}

async function getPrivacyPolicy() {
  const filePath = path.join(process.cwd(), '/content/privacy-policy.mdx')
  const fileContent = readFileSync(filePath, 'utf8')
  return fileContent
}

export default async function PrivacyPolicy() {
  const content = await getPrivacyPolicy()

  return (
    <div className="py-8">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="prose dark:prose-invert prose-lg p-6 md:p-8">
          <MDXRemote source={content} />
        </CardContent>
      </Card>
    </div>
  )
} 