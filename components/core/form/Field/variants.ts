import * as _Variant from '../../../types/variant'
import * as _Attribute from '../../../types/attribute'
import * as _Color from '../../../types/color'
import * as _Position from '../../../types/position'
import * as _Size from '../../../types/size'
import * as _Border from '../../../types/border'
import * as _Typography from '../../../types/typography'

const variants = {
    [_Variant.Field.Form]: {
        appearance: 'none',
        backgroundColor: _Color.Color.White,
        borderRadius: _Border.Radius.Small,
        borderStyle: _Border.Style.Solid,
        borderWidth: _Border.Width.Normal,
        color: _Color.Color.Foreground,
        fontFamily: _Typography.Font.Body,
        fontSize: _Typography.Size.Sm,
        height: _Size.Size.Field,
        outline: 0,
        position: _Position.Position.Relative,
        px: 4,
        py: 0,
        width: '100%',
        '::-webkit-input-placeholder': {
            color: _Color.Color.Primary4,
            opacity: 1,
        },
    },
}

export default variants
