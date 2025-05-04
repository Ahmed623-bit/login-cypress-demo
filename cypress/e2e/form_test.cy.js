describe('اختبار وجود عناصر الفورم', () => {
  it('يتحقق من وجود حقل الاسم، الإيميل، وزر إنشاء الحساب', () => {
    cy.visit('http://127.0.0.1:5500/index.html') // غيّر الرابط إذا لزم

    // التأكد من وجود الحقول والزر
    cy.get('input[name="name"]').should('exist')
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.get('button[type="submit"]').contains('إنشاء الحساب').should('exist')
  })
})
