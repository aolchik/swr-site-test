# No Nested Folders in Netlify CMS

## Status

Implemented.

## Date

June 23rd, 2022.

## Context

Netlify has a nested folder feature in beta (nested collections).

More about the feature can be found in:
- [Netlifycms - Nested Collections](https://www.netlifycms.org/docs/beta-features/#nested-collections)
- [Netlifycms forum - Nested Collections - Dynamic Path/Slug](https://answers.netlify.com/t/nested-collections-dynamic-path-slug/24352/2)

The feature supports a single content per folder.

Example:
  docs/arguments/index
  docs/advanced/cache/index
  docs/advanced/performance/index


## Decision

Manually create folders through specific collections

## Consequences

(+) Don't need to change nextra routing scheme
(+) Reduces risk of content manager to mess with the content structure
(-) Specific collections need to be manually created for each subtree