**Button** — the primary action control; gold pill for main CTAs, forest for secondary, outline/ghost for quiet actions.

```jsx
<Button variant="primary" size="lg">Enquire Now</Button>
<Button variant="outline" iconRight={<ArrowRight size={16} />}>Explore the Lawns</Button>
```

Variants: `primary` (gold fill), `secondary` (forest fill), `outline`, `ghost`. Sizes `sm | md | lg`. Use `as="a"` for links. Hover lifts the button 2px — keep that motion calm; never stack with extra scale.
