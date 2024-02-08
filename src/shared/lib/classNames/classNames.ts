type Mods = Record<string, string | boolean>

export const classNames = (cls:string[] = [], mods:Mods = {}):string => [
    ...cls.filter((item) => item !== null),
    ...Object.entries(mods)
        .reduce((classNames, [className, isExit]) => (
            isExit && !['null', 'undefined'].includes(className)
                ? classNames = [...classNames, className]
                : classNames), []),
].join(' ');
