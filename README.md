# Kernel Panic — Personal Site

Personal project index for **Kernel Panic / @kernelpanic2015**.

The site is built with **MkDocs + Material**, is compatible with **Read the Docs**, and is published to **GitHub Pages** from the generated `gh-pages` branch.

Public site:

https://kernelpanic2015.github.io/

## Local preview

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve -a 127.0.0.1:8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## Publication workflow

The editable sources live on `main`. The generated static site is published to `gh-pages`.

Validate locally before publishing:

```bash
source .venv/bin/activate
mkdocs build --strict
```

If the build succeeds, publish with:

```bash
mkdocs gh-deploy
```

GitHub Pages is configured as:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: /(root)
```

No custom GitHub Actions workflow is required for publication.

## Structure

- `docs/` — site content
- `mkdocs.yml` — MkDocs configuration
- `requirements.txt` — Python dependencies
- `.readthedocs.yaml` — Read the Docs build configuration
- `site/` — local generated output
- `gh-pages` — generated publication branch
