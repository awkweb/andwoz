import * as _Color from '../../../types/color'
import * as _Element from '../../../types/element'
import * as _Typography from '../../../types/typography'
import * as _Variant from '../../../types/variant'

const commonVariant = {
    color: _Color.Color.Foreground,
    fontFamily: _Typography.Font.Title,
    fontWeight: _Typography.Weight.Bold,
    lineHeight: _Typography.LineHeight.Title,
}

const variants = {
    [_Variant.Text.H1]: {
        ...commonVariant,
        fontSize: _Typography.Size.Xxxl,
    },
    [_Variant.Text.H2]: {
        ...commonVariant,
        fontSize: _Typography.Size.Xxl,
    },
    [_Variant.Text.H3]: {
        ...commonVariant,
        fontSize: _Typography.Size.Xl,
    },
    [_Variant.Text.H4]: {
        ...commonVariant,
        fontSize: _Typography.Size.Lg,
    },
    [_Variant.Text.H5]: {
        ...commonVariant,
        fontSize: _Typography.Size.Md,
    },
    [_Variant.Text.Lead]: {
        color: _Color.Color.Primary5,
        fontSize: _Typography.Size.Lg,
        lineHeight: _Typography.LineHeight.Body,
    },
}

export default variants
