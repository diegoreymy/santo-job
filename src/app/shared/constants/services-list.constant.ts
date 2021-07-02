interface IDataServicePage {
  subtitle: string;
  logo: string;
  imagesList: string[];
  mainText: string;
}

export interface IServiceList {
  name: string;
  icon: string;
  link: string;
  layout: number;
  dataServicePage: IDataServicePage[];
}

export const SERVICES_LIST: IServiceList[] = [
  {
    name: 'Publicidade',
    icon: '/assets/images/icons/icon-publicidade.png',
    link: '/servicos/publicidade',
    layout: 1,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais 1',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      },
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais 2',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      },
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais 3',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]

  },
  {
    name: 'Incentivo',
    icon: '/assets/images/icons/icon-incentivo.png',
    link: '/servicos/incentivo',
    layout: 2,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Planejamento estratégico',
    icon: '/assets/images/icons/icon-planejamento.png',
    link: '/servicos/planejamento-estrategico',
    layout: 3,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Trade Marketing',
    icon: '/assets/images/icons/icon-trade.png',
    link: '/servicos/trade-marketing',
    layout: 1,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Influencer',
    icon: '/assets/images/icons/icon-influencer.png',
    link: '/servicos/influencer',
    layout: 2,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Logos e selos',
    icon: '/assets/images/icons/icon-logos-selos.png',
    link: '/servicos/logos-e-selos',
    layout: 3,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Promoção',
    icon: '/assets/images/icons/icon-promotion.png',
    link: '/servicos/promocao',
    layout: 1,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Publi Digital',
    icon: '/assets/images/icons/icon-publi-digital.png',
    link: '/servicos/publi-digital',
    layout: 2,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Projetos proprietários',
    icon: '/assets/images/icons/icon-project.png',
    link: '/servicos/projetos-proprietarios',
    layout: 3,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Eventos',
    icon: '/assets/images/icons/icon-event.png',
    link: '/servicos/eventos',
    layout: 1,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Endomarketing',
    icon: '/assets/images/icons/icon-endomarketing.png',
    link: '/servicos/endomarketing',
    layout: 2,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  },
  {
    name: 'Assessoria de imprensa',
    icon: '/assets/images/icons/icon-press.png',
    link: '/servicos/assessoria-de-imprensa',
    layout: 3,
    dataServicePage: [
      {
        subtitle: 'Exagero de Giga Tasty por Tirullipa em suas redes sociais',
        logo: '/assets/images/icons/logo-oi.png',
        imagesList: [
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
          '/assets/images/tirulipa.png',
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse',
      }
    ]
  }
]
