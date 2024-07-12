import {ElNotification} from "element-plus";

const notification = {
    error(title: string, msg: string) {
        ElNotification.error(
            {
                title: title,
                message: msg,
                duration: 1500
            }
        )
    },

    info(title: string, msg: string) {
        ElNotification.info(
            {
                title: title,
                message: msg,
                duration: 1500
            }
        )
    },

    warn(title: string, msg: string) {
        ElNotification.warning(
            {
                title: title,
                message: msg,
                duration: 1500
            }
        )
    },

    suc(title: string, msg: string) {
        ElNotification.success(
            {
                title: title,
                message: msg,
                duration: 1500
            }
        )
    }
}

export default notification
