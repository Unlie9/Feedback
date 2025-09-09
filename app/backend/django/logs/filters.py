import logging
from abc import ABC, abstractmethod

INFO_LEVELS = (logging.DEBUG, logging.INFO)

ERROR_LEVELS = (logging.WARNING, logging.ERROR, logging.CRITICAL)


class LogFilterBase(ABC, logging.Filter):

    @abstractmethod
    def filter(self, record):
        pass


class InfoLogFilter(LogFilterBase):

    def filter(self, record):
        return record.levelno in INFO_LEVELS


class ErrorLogFilter(LogFilterBase):

    def filter(self, record):
        return record.levelno in ERROR_LEVELS
