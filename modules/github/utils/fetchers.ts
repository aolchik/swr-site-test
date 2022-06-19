

export function getGithubReleasesAsStaticProps(qty: number) {
    return fetch(`https://api.github.com/repos/vercel/swr/releases`)
        .then(res => res.json())
        // we keep the most recent 5 releases here
        .then(releases => ({ props: { ssg: releases?.slice(0, qty) }, revalidate: 10 }))
}