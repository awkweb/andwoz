import * as _Attribute from '../../../types/attribute'
import * as _Border from '../../../types/border'
import * as _Color from '../../../types/color'
import * as _Layout from '../../../types/layout'
import * as _Position from '../../../types/position'
import * as _Shadow from '../../../types/shadow'
import * as _Size from '../../../types/size'
import * as _Typography from '../../../types/typography'
import * as _Variant from '../../../types/variant'

const commonVariant = {
    borderRadius: _Border.Radius.Small,
    borderStyle: _Border.Style.Solid,
    borderWidth: _Border.Width.Normal,
    cursor: 'pointer',
    fontFamily: _Typography.Font.Title,
    fontSize: _Typography.Size.Xs,
    fontWeight: _Typography.Weight.SemiBold,
    height: _Size.Size.Button,
    outline: 'none',
    position: _Position.Position.Relative,
    px: 4,
    py: 0,
    whiteSpace: 'nowrap',
    ':focus': {
        boxShadow: _Shadow.BoxShadow.Button,
    },
    ':disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
        pointerEvents: 'none',
        userSelect: 'none',
    },
}

const variants = {
    [_Variant.Button.Primary]: {
        ...commonVariant,
        backgroundColor: _Color.Color.Foreground,
        borderColor: _Color.Color.Foreground,
        color: _Color.Color.White,
        ':hover': {
            backgroundColor: _Color.Color.Primary8,
        },
    },
    [_Variant.Button.Secondary]: {
        ...commonVariant,
        backgroundColor: _Color.Color.Background,
        borderColor: _Color.Color.Foreground,
        color: _Color.Color.Foreground,
        ':hover': {
            backgroundColor: _Color.Color.Primary1,
        },
    },
}

export default variants
