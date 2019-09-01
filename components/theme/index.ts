import { Theme } from 'styled-system'

import { toRemString, typeScaleRoot } from '../../lib/toRemString'

import { Breakpoint } from '../types/responsive'
import { Color } from '../types/color'
import { BoxShadow } from '../types/shadow'
import { Size } from '../types/size'
import { ZIndex } from '../types/position'
import * as Border from '../types/border'
import * as Typography from '../types/typography'

const borderStyles = {
    [Border.Style.None]: 'none',
    [Border.Style.Solid]: 'solid',
}
const borderWidths = {
    [Border.Width.Normal]: 1,
    [Border.Width.Thick]: 2,
}
const breakpoints = [
    toRemString(16),
    toRemString(480),
    toRemString(768),
    toRemString(1024),
]
breakpoints[Breakpoint.Sm] = breakpoints[0]
breakpoints[Breakpoint.Md] = breakpoints[1]
breakpoints[Breakpoint.Lg] = breakpoints[2]
breakpoints[Breakpoint.Xl] = breakpoints[3]
const colors = {
    [Color.Foreground]: 'hsl(0, 0%, 0%)',
    [Color.Primary8]: 'hsl(109, 0%, 7%)',
    [Color.Primary7]: 'hsl(109, 0%, 20%)',
    [Color.Primary6]: 'hsl(109, 0%, 27%)',
    [Color.Primary5]: 'hsl(109, 0%, 40%)',
    [Color.Primary4]: 'hsl(109, 0%, 53%)',
    [Color.Primary3]: 'hsl(109, 0%, 60%)',
    [Color.Primary2]: 'hsl(109, 0%, 83%)',
    [Color.Primary1]: 'hsl(109, 0%, 98%)',
    [Color.Background]: 'hsl(104, 100%, 100%)',
    [Color.White]: 'hsl(104, 100%, 100%)',
    [Color.Error]: 'hsl(0, 100%, 50%)',
    [Color.Success]: 'hsl(163, 100%, 41%)',
    [Color.Warning]: 'hsl(38, 100%, 61%)',
}
const fonts = {
    [Typography.Font.Body]:
        'system-ui, /* macOS 10.11-10.12 */ -apple-system, /* Windows 6+ */ "Segoe UI", /* Android 4+ */ "Roboto", /* Ubuntu 10.10+ */ "Ubuntu", /* Gnome 3+ */ "Cantarell", /* KDE Plasma 5+ */ "Noto Sans", /* fallback */ sans-serif, /* macOS emoji */ "Apple Color Emoji", /* Windows emoji */ "Segoe UI Emoji", /* Windows emoji */ "Segoe UI Symbol", /* Linux emoji */ "Noto Color Emoji";',
    [Typography.Font.Title]: 'Archivo, sans-serif',
}
const fontSizes = {
    [Typography.Size.Root]: `${typeScaleRoot}px`,
    [Typography.Size.Xxs]: toRemString(12),
    [Typography.Size.Xs]: toRemString(14),
    [Typography.Size.Sm]: toRemString(16),
    [Typography.Size.Md]: toRemString(18),
    [Typography.Size.Lg]: toRemString(20),
    [Typography.Size.Xl]: toRemString(24),
    [Typography.Size.Xxl]: toRemString(30),
    [Typography.Size.Xxxl]: toRemString(36),
}
const fontWeights = {
    [Typography.Weight.Bold]: 700,
    [Typography.Weight.SemiBold]: 600,
    [Typography.Weight.Medium]: 500,
    [Typography.Weight.Normal]: 400,
}
const lineHeights = {
    [Typography.LineHeight.Body]: 1.35,
    [Typography.LineHeight.Title]: 1.08,
}
const radii = {
    [Border.Radius.None]: 0,
    [Border.Radius.Small]: 2,
    [Border.Radius.Circle]: '50%',
}
const shadows = {
    [BoxShadow.Button]: '0 0 0 0.2em rgba(0,0,0,.4)',
}
const sizes = {
    [Size.ButtonHeight]: toRemString(48),
    [Size.FieldHeight]: toRemString(48),
    [Size.AuthWidth]: toRemString(375),
    [Size.ContainerWidth]: toRemString(1088),
    [Size.TextareaHeight]: toRemString(186),
}
const space = [
    toRemString(0),
    toRemString(4),
    toRemString(8),
    toRemString(12),
    toRemString(16),
    toRemString(20),
    toRemString(24),
    toRemString(32),
    toRemString(48),
    toRemString(64),
    toRemString(96),
    toRemString(128),
    toRemString(192),
    toRemString(256),
    toRemString(384),
    toRemString(512),
    toRemString(640),
    toRemString(768),
]
const zIndices = [
    ZIndex.Lowest,
    ZIndex.Zero,
    ZIndex.High,
    ZIndex.Higher,
    ZIndex.Highest,
]

const theme: Theme = {
    borderStyles,
    borderWidths,
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    shadows,
    sizes,
    space,
    zIndices,
}

export { theme }
