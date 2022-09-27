




## Ejemplos 

```
<ProductCard
  key={product.id}
  product={product}
  initialValue={{
        count: 4,
        maxCount: 10
  }}
>
    {
        ({ reset, increaseBy, counter, isMaxCountReached }) => (
            <>
               <ProductImage />
                <ProductTitle />
                <ProductButtons />

            </>
        )
      }
</ProductCard>
```