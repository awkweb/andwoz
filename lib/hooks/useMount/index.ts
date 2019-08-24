import { useEffect, EffectCallback } from 'react'

// eslint-disable react-hooks/exhaustive-deps
export function useMount(callback: EffectCallback) {
    useEffect(callback, [])
}
