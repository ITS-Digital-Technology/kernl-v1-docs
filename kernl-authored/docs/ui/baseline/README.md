# Opinionated Baseline

Resets element selectors to render with opinionated, cross-browser compliant styles.

These files serve as a browser reset and normalization of baseline elements and typography definitions.


## Document

`kernl-ui/src/styles/02.baseline/document.scss`

`html`, `body`, standard, unclassed, _block-level html elements_ (`article`, `footer`, `header`, `nav`, `section`, etc) and _text-level semantics_ (`a`,`button`,`input`,`label`,`select`,`textarea`, etc) are set here.

## Forms

`kernl-ui/src/styles/02.baseline/forms.scss`

_Form element_ baseline styles are set and normalized here.

## Lists

`kernl-ui/src/styles/02.baseline/lists.scss`

_List element_ baseline styles (`ul`, `ol`, `dt`, `li`, `dd`, `dt`) are set and normalized here.

## Media

`kernl-ui/src/styles/02.baseline/media.scss`

_Media element_ baseline styles (`img`, `iframe`, `figure`, `embed`, etc) are set and normalized here.

## Tables

`kernl-ui/src/styles/02.baseline/tables.scss`

_Table element_ baseline styles (`table`, `thead`, `tbody`, `tr`, `th`, `td`, `caption`) are set and normalized here.

## Typography

`kernl-ui/src/styles/02.baseline/typography.scss`

_Typographic element_ baseline font-sizes and line-heights (`ul`, `ol`, `dt`, `li`, `dd`, `dt`) are set and normalized here.

### Responsive type-scaling

kernl(ui) adopts a mobile-first approach, with 15px as the base font-size on the <code>html</code> element. It then scales up at the following breakpoints:

| Base Font Size | Device Size |
| ----- | -------- |
| 15px | mobile (default: up to 719px) |
| 16px | tablet and desktop (720px to 1279px) |
| 17px | widescreen (1280px and up) |

### Headings and Paragraphs

| Element | Size    | Line Height | Example |
| ------- | ----    | ----------- | ------- |
| h1      | 3rem    | 1.1         | <h1>Heading 1</h1> |
| h2      | 2.13rem | 1.3         | <h2>Heading 2</h2> |
| h3      | 1.53rem | 1.4         | <h3>Heading 3</h3> |
| h4      | 1.24rem | 1.4         | <h4>Heading 4</h4> |
| h5      | 1rem    | 1.5         | <h5>Heading 5</h5> |
| h6      | 1rem    | 1.5         | <h6>Heading 6</h6> |
| p, li, td | 1rem  | 1.5         | <p>Paragraph, List Item, Table Cell</p> |



