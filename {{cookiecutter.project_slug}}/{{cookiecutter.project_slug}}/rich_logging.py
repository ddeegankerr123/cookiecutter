from __future__ import annotations

import logging
from typing import Any, Optional

from rich.logging import RichHandler

from .rich_console import get_console


def make_rich_console_handler(
    level: str = "INFO",
    *,
    rich_tracebacks: bool = True,
    tracebacks_show_locals: bool = False,
    markup: bool = True,
    show_time: bool = False,
    show_level: bool = True,
    show_path: bool = False,
) -> logging.Handler:
    """
    Factory used by Django logging dictConfig.
    Returns a RichHandler that writes to the shared Console singleton.
    """
    handler = RichHandler(
        console=get_console(),
        rich_tracebacks=rich_tracebacks,
        tracebacks_show_locals=tracebacks_show_locals,
        markup=markup,
        show_time=show_time,
        show_level=show_level,
        show_path=show_path,
    )
    handler.setLevel(level)
    return handler

