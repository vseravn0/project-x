type Mods = Record<string, string | boolean>

export const classNames = (cls?:string,mods?:Mods):string => {
    return [
        cls,
        ...Object.entries(mods).reduce((classNames,[className,isExit]) => !!isExit ? classNames = [...classNames, className]: classNames,[])
    ].join(' ')
}

classNames('test',{test:true})