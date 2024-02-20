import { classNames } from 'shared/lib/classNames/classNames';

describe('classnames', () => {
    test('empty', () => {
        expect(classNames([], {})).toBe('');
    });
    test('null and undefined values', () => {
        expect(classNames(
            [undefined, null],
            {
                null: true, undefined: true, test: undefined, class: null,
            },
        ))
            .toBe('');
    });
    test('class with mods', () => {
        expect(classNames(['Main'], { hovered: true, bordered: false }))
            .toBe('Main hovered');
    });
    test('only class', () => {
        expect(classNames(['Main']))
            .toBe('Main');
    });
    test('only mods', () => {
        expect(classNames([], { hovered: true, bordered: false }))
            .toBe('hovered');
    });
});
