﻿using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.Queries;

namespace eShop.Ordering.Order.Entities.Item.Queries
{
    public class Items : Paged
    {
        public Guid OrderId { get; set; }
    }
}
