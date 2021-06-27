
@classDecorator
class Bird {
  @propertyDecorator
  name!: string;
  
  @methodDecorator
  fly(
    @parameterDecorator
      meters: number
  ) {}
  
  @accessorDecorator
  get egg() {}
}