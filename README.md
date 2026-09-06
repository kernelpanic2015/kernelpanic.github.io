# Kernel Panic — Personal Site

Personal project index for **Kernel Panic / @kernelpanic2015**.

The site is built with **MkDocs + Material**, is compatible with **Read the Docs**, and is deployed to **GitHub Pages**.

## Local preview

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

## Build

```bash
mkdocs build --strict
```

## Structure

- `docs/` — site content
- `mkdocs.yml` — MkDocs configuration
- `.readthedocs.yaml` — Read the Docs build configuration
- `.github/workflows/pages.yml` — GitHub Pages deployment
