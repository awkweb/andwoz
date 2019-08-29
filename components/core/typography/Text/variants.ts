import * as _Color from '../../../types/color'
import * as _Element from '../../../types/element'
import * as _Typography from '../../../types/typography'
import * as _Variant from '../../../types/variant'

const variants = {
    [_Variant.Text.H1]: {
        fontFamily: _Typography.Font.Title,
        fontSize: _Typography.Size.Xxxl,
        fontWeight: _Typography.Weight.Bold,
        lineHeight: _Typography.LineHeight.Title,
    },
    [_Variant.Text.Lead]: {
        color: _Color.Color.Primary5,
        fontSize: _Typography.Size.Lg,
        lineHeight: _Typography.LineHeight.Body,
    },
}

export default variants
