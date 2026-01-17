# core/rich_console.py
from __future__ import annotations

from functools import lru_cache
from rich.console import Console


@lru_cache(maxsize=1)
def get_console() -> Console:
    """
    Single Rich Console for the whole process.

    Everything (logging, Live, Progress) should use this instance to avoid
    redraw issues and duplicate render surfaces.
    """
    return Console(
        force_terminal=None,   # auto-detect; set True if you want always-on colour
        color_system="auto",
        markup=True,
        highlight=False,       # avoids odd highlighting in logs
        soft_wrap=True,
    )

