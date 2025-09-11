module.exports = {
    CONFIG: {
        CONDITION: {
            EXPIRED: 20,
            NAP: 0,
            SPEND: 0
        }
    },
    ERROR_PAGE: {
        NOT_FOUND: 'Trang này không tồn tại',
    },
    ERROR_FORM: {
        MISSING_FIELD: 'Thiếu giá trị trường nhập liệu',
        MISSING_PAGE: 'Thiếu giá trị page',
        MISSING_NICKNAME: 'Vui lòng nhập tên nhân vật'
    },
    ERROR_AUTH: {
        TOKEN_INVALID: 'Access Token Invalid',
        NO_ACCESS: 'Not authorized to access this resource',
        LOGIN_FAIL: 'Tài khoản hoặc mật khẩu không chính xác!',
    },
    ERROR_AGENT: {
        AGENT_NOT_FOUND: 'Đại lý không tồn tại!!!',
        AGENT_CANT_CREATE: "Không thể tạo đại lý!",
        AGENT_USERNAME_SAME_AS_ORTHER_AGENT: "Tên đăng nhập đã trùng với người khác!",
        AGENT_USERNAME_MUST_OTHER_PASSWORD: "Tài khoản không được trùng với mật khẩu!!",
        AGENT_NAME_LESS_THAN: "Tên đại lý (3-32 kí tự).",
        AGENT_USERNAME_LESS_THAN: "Tên đại lý (3-32 kí tự).",
        AGENT_NAME_MUST_BE_STRING_OR_NUMBER: "Tên đại lý chỉ gồm kí tự và số !!",
        AGENT_USERNAME_MUST_BE_STRING_OR_NUMBER: "Tên đăng nhập đại lý chỉ gồm kí tự và số !!",
        AGENT_REFERER_CODE_LESS_THAN: "Mã giới thiệu (3-32 kí tự).",
        AGENT_REFERER_CODE_MUST_BE_STRING_OR_NUMBER: "Mã giới thiệu chỉ gồm kí tự và số !!",
        AGENT_REFERER_CODE_MUST_BE_ORTHER_PLAYER_NICKNAME: "Mã giới thiệu phải khác tên người chơi !!"
    },
    ERROR_SERVER: {
        WRONG: 'Có lỗi xảy ra, vui lòng thử lại!' 
    },
    ERROR_QUERY: {
        USER_NOT_FOUND: 'user not found',
    },
    ERROR_CUSTOM: {
        PASSWORD_LESS_THAN: "Mật khẩu quá ngắn!!!"
    },
    SUCCESS: "Success",
};