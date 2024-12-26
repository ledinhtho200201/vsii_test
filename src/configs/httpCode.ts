const HTTP_CODE = {
    400: 'Invalid request.',
    401: 'Authentication required. ',
    402: 'Payment required. ',
    403: 'Forbidden. ',
    404: 'API not found. ',
    405: 'Method not allowed. ',
    406: 'Unacceptable. ',
    407: 'Proxy authentication required. ',
    408: 'Request timeout. ',
    409: 'Conflict. The request cannot be completed because it conflicts with current resources. ',
    410: 'Disappeared. ',
    411: 'Length required. ',
    412: 'Precondition failed. ',
    413: 'Payload too large. ',
    414: 'URI too large. ',
    415: 'Unsupported media type. ',
    416: 'Range is out of range. ',
    417: 'Expansion with Expect header failed. ',
    418: 'I am a teapot. ',
    419: 'Your screen has expired. ',
    421: 'Bad request. ',
    422: 'Unprocessable entity. ',
    423: 'Locked. ',
    424: 'Dependency failed. ',
    426: 'Upgrade requested. ',
    428: 'Precondition required. ',
    429: 'Too many requests. ',
    431: 'Request header field too large. ',
    451: 'Unavailable for legal reasons. ',
    500: 'Server internal error. ',
    501: 'Not implemented. ',
    502: 'Bad Gateway. ',
    503: 'Service unavailable. ',
    504: 'Gateway timeout. ',
    505: 'HTTP version not supported. ',
    506: 'An attempt to negotiate resulted in an error. ',
    507: 'Out of space. ',
    508: 'Loop detected. ',
    509: 'Bandwidth limit exceeded. ',
    510: 'Cannot extend. ',
    511: 'Need to authenticate to the network. ',
};

export default HTTP_CODE;
