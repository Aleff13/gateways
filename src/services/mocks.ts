class Mocks {
  static async paymentMethod(stripe) {
    const paymentMethodMock = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 8,
        exp_year: 2023,
        cvc: '314',
      },
    });
  }
}
