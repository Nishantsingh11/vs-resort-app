**AmenityCard** — the workhorse card for amenity / feature grids: gold-tinted icon, Playfair title, muted description, gentle hover-lift.

```jsx
<AmenityCard
  icon={<Waves size={22} />}
  title="Crystal-Blue Pool"
  description="A temperature-controlled pool and jacuzzi framed by sun loungers and palms."
/>
```

Drop several into a CSS grid (`gap: var(--space-5)`). Hover raises the card 6px and deepens the shadow.
