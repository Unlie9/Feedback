import logging

info_logger = logging.getLogger("info")
error_logger = logging.getLogger("error")


class LoggingMiddleware:

    def __init__(self, get_response) -> None:
        self._get_response = get_response

    def __call__(self, request):

        info_logger.info(msg="Request", extra={"request": request.path})
        try:
            response = self._get_response(request)
        except Exception as error:
            error_logger.error(
                msg=f"Response: ({error})", extra={"request": request.path}
            )
        else:
            info_logger.info("Response", extra={"request": response.status_code})

        return response
