import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';



describe('Pruebas en el ProductImage', () => {

    test('Debe de regresar una imagen', () => {

        let img = "./coffee-mug.png"

        const wrapper = renderer.create(
            <ProductImage img={img} />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('debe de mostrar el componente la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }

            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

})