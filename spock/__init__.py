# -*- coding: utf-8 -*-

# Copyright 2019 FMR LLC <opensource@fidelity.com>
# SPDX-License-Identifier: Apache-2.0

"""
Spock is a framework that helps manage complex parameter configurations for Python applications

Please refer to the documentation provided in the README.md
"""

__all__ = ["args", "builder", "config"]

from ._version import get_versions
__version__ = get_versions()['version']
del get_versions
