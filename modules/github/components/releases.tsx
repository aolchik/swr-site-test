
import Markdown from 'markdown-to-jsx'
import React from 'react'

interface GithubRelease {
  body: string
  tag_name: string
  published_at: string
  html_url: string
}

interface GithubReleasesProps {
  releases: GithubRelease[]
}

export function GithubReleases(props: GithubReleasesProps) {
  const releases = props.releases
  return <Markdown>{
      releases.map((release) => {
        const body = release.body
          .replace(/&#39;/g, "'")
          .replace(/@([a-zA-Z0-9_-]+)(?=(,| ))/g, '<a href="https://github.com/$1" target="_blank" rel="noopener">@$1</a>')
        return `## <a href="${release.html_url}" target="_blank" rel="noopener">${release.tag_name}</a> 
          Published on ${new Date(release.published_at).toDateString()}.\n\n${body}`}).join('\n\n')
    }</Markdown>
}