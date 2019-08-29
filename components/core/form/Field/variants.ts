import * as _Variant from '../../../types/variant'
import * as _Attribute from '../../../types/attribute'
import * as _Color from '../../../types/color'
import * as _Position from '../../../types/position'
import * as _Size from '../../../types/size'
import * as _Border from '../../../types/border'
import * as _Typography from '../../../types/typography'

const commonVariant = {
    appearance: 'none',
    borderStyle: _Border.Style.Solid,
    borderWidth: _Border.Width.Normal,
    color: _Color.Color.Foreground,
    fontFamily: _Typography.Font.Body,
    outline: 0,
    position: _Position.Position.Relative,
    width: '100%',
    '::-webkit-input-placeholder': {
        color: _Color.Color.Primary4,
        opacity: 1,
    },
}

const variants = {
    [_Variant.Field.Form]: {
        ...commonVariant,
        borderColor: _Color.Color.Primary2,
        borderRadius: _Border.Radius.Small,
        fontSize: _Typography.Size.Sm,
        height: _Size.Size.Field,
        px: 4,
        py: 0,
    },
}

export default variants
