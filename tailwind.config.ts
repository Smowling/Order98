import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: colors.cyan
            }
        }
    }
}

module.exports = {
    //...
    // plugins: [
    //     require('daisyui'),
    // ],
}