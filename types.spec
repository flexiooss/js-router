Route:
  name: string
  urlTemplate: string
  parent: string

RouteWithParams:
  route: $Route
  params: object

UrlConfiguration:
  protocol: string
  hostname: string
  port: string
  pathname: string

Pathname:
  value: string

RouteCompiled:
  route: $Route
  urlTemplate: string
  regexp:
    $value-object: io.flexio.extended_flex_types.FlexRegExp
