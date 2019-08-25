import { Theme } from 'styled-system'

import { toRemString, typeScaleRoot } from '~/lib/toRemString'

import { Breakpoint } from '../types/responsive'
import { Color } from '../types/color'
import { Size } from '../types/size'
import * as Border from '../types/border'
import * as Text from '../types/typography'

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
    [Color.Background]: 'hsl(42, 100%, 99%)',
    [Color.Error]: 'hsl(0, 100%, 50%)',
    [Color.Success]: 'hsl(163, 100%, 41%)',
    [Color.Warning]: 'hsl(38, 100%, 61%)',
}
const fonts = {
    [Text.Font.Body]:
        'system-ui, /* macOS 10.11-10.12 */ -apple-system, /* Windows 6+ */ "Segoe UI", /* Android 4+ */ "Roboto", /* Ubuntu 10.10+ */ "Ubuntu", /* Gnome 3+ */ "Cantarell", /* KDE Plasma 5+ */ "Noto Sans", /* fallback */ sans-serif, /* macOS emoji */ "Apple Color Emoji", /* Windows emoji */ "Segoe UI Emoji", /* Windows emoji */ "Segoe UI Symbol", /* Linux emoji */ "Noto Color Emoji";',
    [Text.Font.Title]: 'Archivo, sans-serif',
}
const fontSizes = {
    [Text.Size.Root]: `${typeScaleRoot}px`,
    [Text.Size.Xxs]: toRemString(12),
    [Text.Size.Xs]: toRemString(14),
    [Text.Size.Sm]: toRemString(16),
    [Text.Size.Md]: toRemString(18),
    [Text.Size.Lg]: toRemString(20),
    [Text.Size.Xl]: toRemString(24),
    [Text.Size.Xxl]: toRemString(30),
    [Text.Size.Xxxl]: toRemString(36),
}
const fontWeights = {
    [Text.Weight.Bold]: 700,
    [Text.Weight.Normal]: 400,
}
const radii = {
    [Border.Radius.None]: 0,
    [Border.Radius.Small]: 2,
}
const sizes = {
    [Size.Button]: toRemString(48),
    [Size.Field]: toRemString(48),
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
const zIndices = [0, 10, 100, 1000]

const theme: Theme = {
    borderStyles,
    borderWidths,
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    sizes,
    space,
    zIndices,
}

export default theme
