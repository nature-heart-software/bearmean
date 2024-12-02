# Tracking potential issues

## Types Inlining issue

Some types may become inlined when building definition files, which can cause them to become unreasonably large.

Here are related GitHub issues:

* https://github.com/microsoft/TypeScript/issues/37151
* https://github.com/chakra-ui/chakra-ui/issues/1445

Here are ways to fix it:

* https://github.com/chakra-ui/chakra-ui/pull/1475#pullrequestreview-461757616

Type inlining may occur:

* When passing type parameters to a few specific functions
    * ```typescript 
      type MyCompProps = { hello: string, world: number }
      const MyComp = forwardRef<HTMLDivElement, MyCompProps>()
      ```
        * The solution is to not use type parameters for these functions:
          ```typescript
          const MyComp: FRC<HTMLDivElement, MyCompProps> = forwardRef()
          ```
* When passing a complex (union, intersection, typeof...) type parameter to a function
    * ```typescript
      const definePartialProps = createPartial<typeof { hello: string, world: number }>()
      ```
        * The solution is to pass the reference to a complex type instead of the complex type itself:
          ```typescript
          type PartialObject = typeof { hello: string, world: number }
          const definePartialProps = createPartial<PartialObject>()
          ```

## Long compilation time

This section is not caused by Bearmean but is something you might encounter as you build a UI library.

If you encounter a long compilation time, I recommend checking the performance tracking section of the TypeScript Wiki
to help find the
issue: https://github.com/microsoft/TypeScript/wiki/Performance-Tracing