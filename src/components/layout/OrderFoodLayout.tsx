import React, { useState, useRef, useEffect } from 'react'
import {
  Layout,
  Menu,
  Input,
  Card,
  Typography,
  Button,
  Switch,
  List,
  Grid,
  Divider,
  Drawer,
} from '@arco-design/web-react'
import './OrderFoodLayout.css'
import Meta from '@arco-design/web-react/es/Card/meta'
import { IconFileImage } from '@arco-design/web-react/icon'
const { Header, Content } = Layout
const { Title } = Typography
const Row = Grid.Row
const Col = Grid.Col

const mockData = {
  tenantId: 1,
  tenantName: 'Fast Eats',
  description: 'A casual eatery specializing in quick and tasty meals.',
  categories: [
    {
      categoryId: 1,
      categoryName: 'Breakfast',
      description: 'Morning meals including eggs, pancakes, and coffee.',
      items: [
        {
          itemId: 1,
          itemName: 'TERIYAKI CHICKEN',
          description: 'Grilled chicken with a teriyaki glaze.',
          price: 12.99,
          isSetMeal: 0,
          validFrom: '08:00:00',
          validTo: '11:30:00',
          availableOnDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        },
        {
          itemId: 2,
          itemName: 'BBQ CHICKEN SET',
          description: 'BBQ chicken with a choice of sides and a drink.',
          price: 15.99,
          isSetMeal: 1,
          validFrom: '08:00:00',
          validTo: '11:30:00',
          availableOnDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: 'Lunch',
      description: 'Midday meals including sandwiches, salads, and burgers.',
      items: [
        {
          itemId: 2,
          itemName: 'BBQ CHICKEN SET',
          description: 'BBQ chicken with a choice of sides and a drink.',
          price: 15.99,
          isSetMeal: 1,
          validFrom: '11:30:00',
          validTo: '16:00:00',
          availableOnDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        },
        {
          itemId: 3,
          itemName: 'MUSHROOM SAUCE CHICKEN',
          description: 'Chicken served with a creamy mushroom sauce.',
          price: 13.99,
          isSetMeal: 0,
          validFrom: '11:30:00',
          validTo: '16:00:00',
          availableOnDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        },
        {
          itemId: 4,
          itemName: 'FRENCH FRIES',
          description: 'Crispy golden fries.',
          price: 3.99,
          isSetMeal: 0,
          validFrom: '11:30:00',
          validTo: '16:00:00',
          availableOnDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: 'Dinner',
      description: 'Evening meals including steaks, pasta, and wine.',
      items: [
        {
          itemId: 6,
          itemName: 'MASHED POTATOES',
          description: 'Creamy mashed potatoes.',
          price: 4.49,
          isSetMeal: 0,
          validFrom: '18:00:00',
          validTo: '22:00:00',
          availableOnDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        },
        {
          itemId: 7,
          itemName: 'POTATO WEDGES',
          description: 'Seasoned potato wedges.',
          price: 4.49,
          isSetMeal: 0,
          validFrom: '18:00:00',
          validTo: '22:00:00',
          availableOnDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        },
      ],
    },
    {
      categoryId: 4,
      categoryName: 'Drinks',
      description: 'Beverages including soda, juice, and cocktails.',
      items: [
        {
          itemId: 8,
          itemName: 'SODA',
          description: 'Refreshing carbonated drink.',
          price: 1.99,
          isSetMeal: 0,
          validFrom: '00:00:00',
          validTo: '23:59:59',
          availableOnDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        },
      ],
    },
  ],
}

const mockSubData = {
  itemId: 2,
  itemName: 'BBQ CHICKEN SET',
  description: 'BBQ chicken with a choice of sides and a drink.',
  price: 15.99,
  mealOptions: [
    {
      optionName: 'Main Course Selection',
      minSelection: 1,
      maxSelection: 1,
      items: [
        {
          itemId: 1,
          itemName: 'TERIYAKI CHICKEN',
          additionalCost: 0,
          customization: [
            {
              customizationName: 'Spicy Level',
              customizationDescription: 'Choose the spice level for your dish.',
              options: [
                {
                  name: 'Mild',
                  additionalCost: 0,
                },
                {
                  name: 'Medium',
                  additionalCost: 0,
                },
                {
                  name: 'Hot',
                  additionalCost: 0,
                },
              ],
            },
          ],
        },
        {
          itemId: 3,
          itemName: 'MUSHROOM SAUCE CHICKEN',
          additionalCost: 0,
          customization: [],
        },
      ],
    },
    {
      optionName: 'Drink Selection',
      minSelection: 1,
      maxSelection: 1,
      items: [
        {
          itemId: 8,
          itemName: 'SODA',
          additionalCost: 0,
          customization: [
            {
              customizationName: 'Sugar Level',
              customizationDescription:
                'Adjust the amount of sugar in your drink.',
              options: [
                {
                  name: 'No Sugar',
                  additionalCost: 0,
                },
                {
                  name: 'Half Sugar',
                  additionalCost: 0,
                },
                {
                  name: 'Full Sugar',
                  additionalCost: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      optionName: 'Side Dish Selection',
      minSelection: 0,
      maxSelection: 2,
      items: [
        {
          itemId: 4,
          itemName: 'FRENCH FRIES',
          additionalCost: 0,
          customization: [],
        },
        {
          itemId: 5,
          itemName: 'SALAD',
          additionalCost: 0,
          customization: [],
        },
        {
          itemId: 6,
          itemName: 'MASHED POTATOES',
          additionalCost: 0,
          customization: [],
        },
        {
          itemId: 7,
          itemName: 'POTATO WEDGES',
          additionalCost: 0,
          customization: [],
        },
      ],
    },
  ],
}

const OrderFoodLayout: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState('1')
  const menuRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card')
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [selectedFood, setSelectedFood] = useState<string | null>(null)

  const handleFoodClick = (foodName: string) => {
    setSelectedFood(foodName)
    setDrawerVisible(true)
  }

  const closeDrawer = () => {
    setDrawerVisible(false)
    setSelectedFood(null)
  }

  const menuItems = mockData.categories.map((x) => ({
    ...x,
    key: String(x.categoryId),
    ref: React.createRef<HTMLDivElement>(),
  }))

  const scrollToMenuItem = (key: string) => {
    const contentElement = contentRef.current
    const menuItem = menuItems.find((section) => section.key === key)?.ref
      .current
    if (menuItem && contentElement) {
      contentElement.scrollTo({
        top: menuItem.offsetTop - 190, // Adjust for fixed menu height
        behavior: 'smooth',
      })
      setCurrentMenu(key)
      scrollMenuToKey(key)
    }
  }

  const scrollMenuToKey = (key: string) => {
    const menuElement = menuRef.current
    if (menuElement) {
      const menuItem = menuElement?.querySelector(
        `[data-key="${key}"]`
      ) as HTMLElement
      const menuItemOffset = menuItem.offsetLeft
      const menuCenter = menuElement.clientWidth / 2
      const scrollPosition =
        menuItemOffset - menuCenter + menuItem.clientWidth / 2
      menuElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const content = contentRef.current
      if (content) {
        const scrollPosition = content.scrollTop + content.clientHeight / 2 // Center of the content viewport

        const currentKey = menuItems.find(({ ref }, index) => {
          const currentRef = ref.current
          const nextSection = menuItems[index + 1]
          const nextRef = nextSection ? nextSection.ref.current : null

          if (currentRef) {
            const currentOffsetTop = currentRef.offsetTop
            const nextOffsetTop = nextRef
              ? nextRef.offsetTop
              : Number.MAX_SAFE_INTEGER

            return (
              scrollPosition >= currentOffsetTop &&
              scrollPosition < nextOffsetTop
            )
          }
          return false
        })?.key

        if (currentKey && currentKey !== currentMenu) {
          setCurrentMenu(currentKey)
          scrollMenuToKey(currentKey)
        }
      }
    }

    const content = contentRef.current
    content?.addEventListener('scroll', handleScroll)
    return () => {
      content?.removeEventListener('scroll', handleScroll)
    }
  }, [currentMenu, menuItems])

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header'>
        <Title heading={5} className='title'>
          {mockData.tenantName}
        </Title>
        <Input.Search
          placeholder='Search by name or code'
          className='search-input'
        />
        <div ref={menuRef} className='menu-container'>
          <Menu
            mode='horizontal'
            ellipsis={false}
            selectedKeys={[currentMenu]}
            onClickMenuItem={scrollToMenuItem}
            className='menu'
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.key} data-key={item.key}>
                {item.categoryName}
              </Menu.Item>
            ))}
          </Menu>
        </div>
        {/* <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <Switch
            checked={viewMode === 'card'}
            onChange={(checked) => setViewMode(checked ? 'card' : 'list')}
          />
        </div> */}
      </Header>

      <Content className='content' ref={contentRef}>
        {menuItems.map((category) => (
          <div ref={category.ref} key={category.key}>
            <Divider orientation='center' style={{ marginBottom: '10px' }}>
              {category.categoryName}
            </Divider>
            {viewMode === 'card' ? (
              <div style={{ width: '100%' }}>
                <Row gutter={24}>
                  {category.items.map((item) => (
                    <Col xs={12} md={6} lg={3}>
                      <Card
                        onClick={() => handleFoodClick(item.itemName)}
                        hoverable
                        key={item.itemId}
                        style={{ marginBottom: '10px' }}
                        cover={
                          <div
                            style={{
                              height: 100,
                              overflow: 'hidden',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <IconFileImage
                              style={{
                                fontSize: 50,
                              }}
                            />
                          </div>
                        }
                      >
                        <Meta
                          title={item.itemName}
                          description={<>${item.price.toFixed(2)}</>}
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ) : (
              <List
                dataSource={category.items}
                render={(item) => (
                  <List.Item>
                    <div>
                      <strong>{item.itemName}</strong> - $
                      {item.price.toFixed(2)}
                    </div>
                  </List.Item>
                )}
                style={{ paddingLeft: '20px' }}
              />
            )}
          </div>
        ))}
      </Content>
      <Button
        type='primary'
        style={{
          width: '100%',
          backgroundColor: '#03616C',
          position: 'fixed',
          bottom: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        ORDER NOW
      </Button>
      <Drawer
        title={selectedFood}
        visible={drawerVisible}
        onCancel={closeDrawer}
        placement='bottom'
        height='100%'
        style={{ borderRadius: '12px 12px 0 0' }}
      >
        <div>
          {/* Add food customization options here */}
          <p>Customize your {selectedFood}</p>
        </div>
      </Drawer>
    </Layout>
  )
}

export default OrderFoodLayout
