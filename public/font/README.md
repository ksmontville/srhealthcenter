# Fonts

Self-hosted rather than loaded from Google Fonts. The practice serves a rural
area with slow and unreliable connections, and the external request cost two
extra DNS + TLS round trips (`fonts.googleapis.com` and `fonts.gstatic.com`)
before any text could render — plus a third-party dependency that fails closed.

Both faces are subset to Latin + common punctuation, which is all the site uses.

| file                  | source                        | licence    |
| --------------------- | ----------------------------- | ---------- |
| `Roboto-Regular.woff2`| Roboto 400                    | Apache-2.0 |
| `Roboto-Bold.woff2`   | Roboto 700                    | Apache-2.0 |
| `Kalam-Regular.woff2` | Kalam 400 (headings/brand)    | OFL 1.1 — see OFL.txt |

Only weights 400 and 700 are shipped; those are the only ones the site uses.
The previous Google Fonts request pulled six weights (100;300;400;500;700;900).

Regenerate a subset with:

    pyftsubset SOURCE.ttf --output-file=OUT.woff2 --flavor=woff2 \
      --unicodes="U+0020-007E,U+00A0-00FF,U+2010-2027,U+2030-205E,U+20AC,U+2122" \
      --layout-features="kern,liga,clig,calt" --no-hinting --desubroutinize
