import {ElNotification} from "element-plus";

const notification = {
    error(title: string, msg: string) {
        ElNotification.error(
            {
                title: title,
                message: msg,
                type: 'error',
                duration: 1500
            }
        )
    },

    info(title: string, msg: string) {
        ElNotification.error(
            {
                title: title,
                message: msg,
                type: 'info',
                duration: 1500
            }
        )
    },

    warn(title: string, msg: string) {
        ElNotification.error(
            {
                title: title,
                message: msg,
                type: 'warning',
                duration: 1500
            }
        )
    },

    suc(title: string, msg: string) {
        ElNotification.error(
            {
                title: title,
                message: msg,
                type: 'success',
                duration: 1500
            }
        )
    }
}

export default notification
