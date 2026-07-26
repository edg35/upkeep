
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Household
 * 
 */
export type Household = $Result.DefaultSelection<Prisma.$HouseholdPayload>
/**
 * Model HouseholdMember
 * 
 */
export type HouseholdMember = $Result.DefaultSelection<Prisma.$HouseholdMemberPayload>
/**
 * Model HouseholdInvitation
 * 
 */
export type HouseholdInvitation = $Result.DefaultSelection<Prisma.$HouseholdInvitationPayload>
/**
 * Model HouseholdJoinRequest
 * 
 */
export type HouseholdJoinRequest = $Result.DefaultSelection<Prisma.$HouseholdJoinRequestPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemSchedule
 * 
 */
export type ItemSchedule = $Result.DefaultSelection<Prisma.$ItemSchedulePayload>
/**
 * Model ItemHistory
 * 
 */
export type ItemHistory = $Result.DefaultSelection<Prisma.$ItemHistoryPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const InvitationStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  EXPIRED: 'EXPIRED'
};

export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus]


export const JoinRequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type JoinRequestStatus = (typeof JoinRequestStatus)[keyof typeof JoinRequestStatus]


export const ItemType: {
  CONSUMABLE: 'CONSUMABLE',
  MAINTENANCE: 'MAINTENANCE',
  BILL: 'BILL',
  APPOINTMENT: 'APPOINTMENT'
};

export type ItemType = (typeof ItemType)[keyof typeof ItemType]


export const TrackingMode: {
  INTERVAL: 'INTERVAL',
  FIXED_DATE: 'FIXED_DATE',
  RECURRING: 'RECURRING'
};

export type TrackingMode = (typeof TrackingMode)[keyof typeof TrackingMode]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type InvitationStatus = $Enums.InvitationStatus

export const InvitationStatus: typeof $Enums.InvitationStatus

export type JoinRequestStatus = $Enums.JoinRequestStatus

export const JoinRequestStatus: typeof $Enums.JoinRequestStatus

export type ItemType = $Enums.ItemType

export const ItemType: typeof $Enums.ItemType

export type TrackingMode = $Enums.TrackingMode

export const TrackingMode: typeof $Enums.TrackingMode

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.household`: Exposes CRUD operations for the **Household** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Households
    * const households = await prisma.household.findMany()
    * ```
    */
  get household(): Prisma.HouseholdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.householdMember`: Exposes CRUD operations for the **HouseholdMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HouseholdMembers
    * const householdMembers = await prisma.householdMember.findMany()
    * ```
    */
  get householdMember(): Prisma.HouseholdMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.householdInvitation`: Exposes CRUD operations for the **HouseholdInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HouseholdInvitations
    * const householdInvitations = await prisma.householdInvitation.findMany()
    * ```
    */
  get householdInvitation(): Prisma.HouseholdInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.householdJoinRequest`: Exposes CRUD operations for the **HouseholdJoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HouseholdJoinRequests
    * const householdJoinRequests = await prisma.householdJoinRequest.findMany()
    * ```
    */
  get householdJoinRequest(): Prisma.HouseholdJoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemSchedule`: Exposes CRUD operations for the **ItemSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemSchedules
    * const itemSchedules = await prisma.itemSchedule.findMany()
    * ```
    */
  get itemSchedule(): Prisma.ItemScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemHistory`: Exposes CRUD operations for the **ItemHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemHistories
    * const itemHistories = await prisma.itemHistory.findMany()
    * ```
    */
  get itemHistory(): Prisma.ItemHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshToken: 'RefreshToken',
    Household: 'Household',
    HouseholdMember: 'HouseholdMember',
    HouseholdInvitation: 'HouseholdInvitation',
    HouseholdJoinRequest: 'HouseholdJoinRequest',
    Category: 'Category',
    Item: 'Item',
    ItemSchedule: 'ItemSchedule',
    ItemHistory: 'ItemHistory',
    Reminder: 'Reminder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "household" | "householdMember" | "householdInvitation" | "householdJoinRequest" | "category" | "item" | "itemSchedule" | "itemHistory" | "reminder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Household: {
        payload: Prisma.$HouseholdPayload<ExtArgs>
        fields: Prisma.HouseholdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findFirst: {
            args: Prisma.HouseholdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          findMany: {
            args: Prisma.HouseholdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          create: {
            args: Prisma.HouseholdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          createMany: {
            args: Prisma.HouseholdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          delete: {
            args: Prisma.HouseholdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          update: {
            args: Prisma.HouseholdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseholdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>[]
          }
          upsert: {
            args: Prisma.HouseholdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdPayload>
          }
          aggregate: {
            args: Prisma.HouseholdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHousehold>
          }
          groupBy: {
            args: Prisma.HouseholdGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdCountAggregateOutputType> | number
          }
        }
      }
      HouseholdMember: {
        payload: Prisma.$HouseholdMemberPayload<ExtArgs>
        fields: Prisma.HouseholdMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          findFirst: {
            args: Prisma.HouseholdMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          findMany: {
            args: Prisma.HouseholdMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>[]
          }
          create: {
            args: Prisma.HouseholdMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          createMany: {
            args: Prisma.HouseholdMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>[]
          }
          delete: {
            args: Prisma.HouseholdMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          update: {
            args: Prisma.HouseholdMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseholdMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>[]
          }
          upsert: {
            args: Prisma.HouseholdMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdMemberPayload>
          }
          aggregate: {
            args: Prisma.HouseholdMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouseholdMember>
          }
          groupBy: {
            args: Prisma.HouseholdMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdMemberCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdMemberCountAggregateOutputType> | number
          }
        }
      }
      HouseholdInvitation: {
        payload: Prisma.$HouseholdInvitationPayload<ExtArgs>
        fields: Prisma.HouseholdInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>
          }
          findFirst: {
            args: Prisma.HouseholdInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>
          }
          findMany: {
            args: Prisma.HouseholdInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>[]
          }
          create: {
            args: Prisma.HouseholdInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>
          }
          createMany: {
            args: Prisma.HouseholdInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>[]
          }
          delete: {
            args: Prisma.HouseholdInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>
          }
          update: {
            args: Prisma.HouseholdInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseholdInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>[]
          }
          upsert: {
            args: Prisma.HouseholdInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdInvitationPayload>
          }
          aggregate: {
            args: Prisma.HouseholdInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouseholdInvitation>
          }
          groupBy: {
            args: Prisma.HouseholdInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdInvitationCountAggregateOutputType> | number
          }
        }
      }
      HouseholdJoinRequest: {
        payload: Prisma.$HouseholdJoinRequestPayload<ExtArgs>
        fields: Prisma.HouseholdJoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseholdJoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseholdJoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>
          }
          findFirst: {
            args: Prisma.HouseholdJoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseholdJoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>
          }
          findMany: {
            args: Prisma.HouseholdJoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>[]
          }
          create: {
            args: Prisma.HouseholdJoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>
          }
          createMany: {
            args: Prisma.HouseholdJoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseholdJoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>[]
          }
          delete: {
            args: Prisma.HouseholdJoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>
          }
          update: {
            args: Prisma.HouseholdJoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.HouseholdJoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseholdJoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseholdJoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.HouseholdJoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseholdJoinRequestPayload>
          }
          aggregate: {
            args: Prisma.HouseholdJoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouseholdJoinRequest>
          }
          groupBy: {
            args: Prisma.HouseholdJoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseholdJoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseholdJoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<HouseholdJoinRequestCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemSchedule: {
        payload: Prisma.$ItemSchedulePayload<ExtArgs>
        fields: Prisma.ItemScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>
          }
          findFirst: {
            args: Prisma.ItemScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>
          }
          findMany: {
            args: Prisma.ItemScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>[]
          }
          create: {
            args: Prisma.ItemScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>
          }
          createMany: {
            args: Prisma.ItemScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>[]
          }
          delete: {
            args: Prisma.ItemScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>
          }
          update: {
            args: Prisma.ItemScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ItemScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>[]
          }
          upsert: {
            args: Prisma.ItemScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemSchedulePayload>
          }
          aggregate: {
            args: Prisma.ItemScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemSchedule>
          }
          groupBy: {
            args: Prisma.ItemScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ItemScheduleCountAggregateOutputType> | number
          }
        }
      }
      ItemHistory: {
        payload: Prisma.$ItemHistoryPayload<ExtArgs>
        fields: Prisma.ItemHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          findFirst: {
            args: Prisma.ItemHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          findMany: {
            args: Prisma.ItemHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>[]
          }
          create: {
            args: Prisma.ItemHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          createMany: {
            args: Prisma.ItemHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>[]
          }
          delete: {
            args: Prisma.ItemHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          update: {
            args: Prisma.ItemHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ItemHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ItemHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          aggregate: {
            args: Prisma.ItemHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemHistory>
          }
          groupBy: {
            args: Prisma.ItemHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ItemHistoryCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReminderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    household?: HouseholdOmit
    householdMember?: HouseholdMemberOmit
    householdInvitation?: HouseholdInvitationOmit
    householdJoinRequest?: HouseholdJoinRequestOmit
    category?: CategoryOmit
    item?: ItemOmit
    itemSchedule?: ItemScheduleOmit
    itemHistory?: ItemHistoryOmit
    reminder?: ReminderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdHouseholds: number
    memberships: number
    invitations: number
    requests: number
    items: number
    itemHistories: number
    reminders: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdHouseholds?: boolean | UserCountOutputTypeCountCreatedHouseholdsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    invitations?: boolean | UserCountOutputTypeCountInvitationsArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    items?: boolean | UserCountOutputTypeCountItemsArgs
    itemHistories?: boolean | UserCountOutputTypeCountItemHistoriesArgs
    reminders?: boolean | UserCountOutputTypeCountRemindersArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedHouseholdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdJoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type HouseholdCountOutputType
   */

  export type HouseholdCountOutputType = {
    members: number
    invitations: number
    householdJoinRequests: number
    categories: number
  }

  export type HouseholdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | HouseholdCountOutputTypeCountMembersArgs
    invitations?: boolean | HouseholdCountOutputTypeCountInvitationsArgs
    householdJoinRequests?: boolean | HouseholdCountOutputTypeCountHouseholdJoinRequestsArgs
    categories?: boolean | HouseholdCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdCountOutputType
     */
    select?: HouseholdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdMemberWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdInvitationWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountHouseholdJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdJoinRequestWhereInput
  }

  /**
   * HouseholdCountOutputType without action
   */
  export type HouseholdCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    items: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    histories: number
    reminders: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | ItemCountOutputTypeCountHistoriesArgs
    reminders?: boolean | ItemCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemHistoryWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    email: string | null
    email_verified: boolean | null
    password_hash: string | null
    name: string | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    email: string | null
    email_verified: boolean | null
    password_hash: string | null
    name: string | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    email_verified: number
    password_hash: number
    name: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    email_verified?: true
    password_hash?: true
    name?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    email_verified?: true
    password_hash?: true
    name?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    email_verified?: true
    password_hash?: true
    name?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    email: string
    email_verified: boolean
    password_hash: string | null
    name: string
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    email_verified?: boolean
    password_hash?: boolean
    name?: boolean
    updated_at?: boolean
    createdHouseholds?: boolean | User$createdHouseholdsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    itemHistories?: boolean | User$itemHistoriesArgs<ExtArgs>
    reminders?: boolean | User$remindersArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    email_verified?: boolean
    password_hash?: boolean
    name?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    email_verified?: boolean
    password_hash?: boolean
    name?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    email_verified?: boolean
    password_hash?: boolean
    name?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "email_verified" | "password_hash" | "name" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdHouseholds?: boolean | User$createdHouseholdsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    itemHistories?: boolean | User$itemHistoriesArgs<ExtArgs>
    reminders?: boolean | User$remindersArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdHouseholds: Prisma.$HouseholdPayload<ExtArgs>[]
      memberships: Prisma.$HouseholdMemberPayload<ExtArgs>[]
      invitations: Prisma.$HouseholdInvitationPayload<ExtArgs>[]
      requests: Prisma.$HouseholdJoinRequestPayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
      itemHistories: Prisma.$ItemHistoryPayload<ExtArgs>[]
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      email: string
      email_verified: boolean
      password_hash: string | null
      name: string
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdHouseholds<T extends User$createdHouseholdsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdHouseholdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends User$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itemHistories<T extends User$itemHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$itemHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reminders<T extends User$remindersArgs<ExtArgs> = {}>(args?: Subset<T, User$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly email_verified: FieldRef<"User", 'Boolean'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdHouseholds
   */
  export type User$createdHouseholdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    cursor?: HouseholdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    where?: HouseholdMemberWhereInput
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    cursor?: HouseholdMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * User.invitations
   */
  export type User$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    where?: HouseholdInvitationWhereInput
    orderBy?: HouseholdInvitationOrderByWithRelationInput | HouseholdInvitationOrderByWithRelationInput[]
    cursor?: HouseholdInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdInvitationScalarFieldEnum | HouseholdInvitationScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    where?: HouseholdJoinRequestWhereInput
    orderBy?: HouseholdJoinRequestOrderByWithRelationInput | HouseholdJoinRequestOrderByWithRelationInput[]
    cursor?: HouseholdJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdJoinRequestScalarFieldEnum | HouseholdJoinRequestScalarFieldEnum[]
  }

  /**
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * User.itemHistories
   */
  export type User$itemHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    where?: ItemHistoryWhereInput
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    cursor?: ItemHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }

  /**
   * User.reminders
   */
  export type User$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    token_id: string | null
    user_id: string | null
    token_hash: string | null
    device_info: string | null
    created_at: Date | null
    expires_at: Date | null
    revoked_at: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    token_id: string | null
    user_id: string | null
    token_hash: string | null
    device_info: string | null
    created_at: Date | null
    expires_at: Date | null
    revoked_at: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    token_id: number
    user_id: number
    token_hash: number
    device_info: number
    created_at: number
    expires_at: number
    revoked_at: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    token_id?: true
    user_id?: true
    token_hash?: true
    device_info?: true
    created_at?: true
    expires_at?: true
    revoked_at?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    token_id?: true
    user_id?: true
    token_hash?: true
    device_info?: true
    created_at?: true
    expires_at?: true
    revoked_at?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    token_id?: true
    user_id?: true
    token_hash?: true
    device_info?: true
    created_at?: true
    expires_at?: true
    revoked_at?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    token_id: string
    user_id: string
    token_hash: string
    device_info: string | null
    created_at: Date
    expires_at: Date
    revoked_at: Date | null
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    user_id?: boolean
    token_hash?: boolean
    device_info?: boolean
    created_at?: boolean
    expires_at?: boolean
    revoked_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    user_id?: boolean
    token_hash?: boolean
    device_info?: boolean
    created_at?: boolean
    expires_at?: boolean
    revoked_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    user_id?: boolean
    token_hash?: boolean
    device_info?: boolean
    created_at?: boolean
    expires_at?: boolean
    revoked_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    token_id?: boolean
    user_id?: boolean
    token_hash?: boolean
    device_info?: boolean
    created_at?: boolean
    expires_at?: boolean
    revoked_at?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token_id" | "user_id" | "token_hash" | "device_info" | "created_at" | "expires_at" | "revoked_at", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      token_id: string
      user_id: string
      token_hash: string
      device_info: string | null
      created_at: Date
      expires_at: Date
      revoked_at: Date | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `token_id`
     * const refreshTokenWithToken_idOnly = await prisma.refreshToken.findMany({ select: { token_id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `token_id`
     * const refreshTokenWithToken_idOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { token_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `token_id`
     * const refreshTokenWithToken_idOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { token_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly token_id: FieldRef<"RefreshToken", 'String'>
    readonly user_id: FieldRef<"RefreshToken", 'String'>
    readonly token_hash: FieldRef<"RefreshToken", 'String'>
    readonly device_info: FieldRef<"RefreshToken", 'String'>
    readonly created_at: FieldRef<"RefreshToken", 'DateTime'>
    readonly expires_at: FieldRef<"RefreshToken", 'DateTime'>
    readonly revoked_at: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Household
   */

  export type AggregateHousehold = {
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  export type HouseholdMinAggregateOutputType = {
    household_id: string | null
    name: string | null
    created_by: string | null
    updated_at: Date | null
  }

  export type HouseholdMaxAggregateOutputType = {
    household_id: string | null
    name: string | null
    created_by: string | null
    updated_at: Date | null
  }

  export type HouseholdCountAggregateOutputType = {
    household_id: number
    name: number
    created_by: number
    updated_at: number
    _all: number
  }


  export type HouseholdMinAggregateInputType = {
    household_id?: true
    name?: true
    created_by?: true
    updated_at?: true
  }

  export type HouseholdMaxAggregateInputType = {
    household_id?: true
    name?: true
    created_by?: true
    updated_at?: true
  }

  export type HouseholdCountAggregateInputType = {
    household_id?: true
    name?: true
    created_by?: true
    updated_at?: true
    _all?: true
  }

  export type HouseholdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Household to aggregate.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Households
    **/
    _count?: true | HouseholdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMaxAggregateInputType
  }

  export type GetHouseholdAggregateType<T extends HouseholdAggregateArgs> = {
        [P in keyof T & keyof AggregateHousehold]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHousehold[P]>
      : GetScalarType<T[P], AggregateHousehold[P]>
  }




  export type HouseholdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdWhereInput
    orderBy?: HouseholdOrderByWithAggregationInput | HouseholdOrderByWithAggregationInput[]
    by: HouseholdScalarFieldEnum[] | HouseholdScalarFieldEnum
    having?: HouseholdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdCountAggregateInputType | true
    _min?: HouseholdMinAggregateInputType
    _max?: HouseholdMaxAggregateInputType
  }

  export type HouseholdGroupByOutputType = {
    household_id: string
    name: string
    created_by: string
    updated_at: Date
    _count: HouseholdCountAggregateOutputType | null
    _min: HouseholdMinAggregateOutputType | null
    _max: HouseholdMaxAggregateOutputType | null
  }

  type GetHouseholdGroupByPayload<T extends HouseholdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    name?: boolean
    created_by?: boolean
    updated_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Household$membersArgs<ExtArgs>
    invitations?: boolean | Household$invitationsArgs<ExtArgs>
    householdJoinRequests?: boolean | Household$householdJoinRequestsArgs<ExtArgs>
    categories?: boolean | Household$categoriesArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    name?: boolean
    created_by?: boolean
    updated_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    name?: boolean
    created_by?: boolean
    updated_at?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["household"]>

  export type HouseholdSelectScalar = {
    household_id?: boolean
    name?: boolean
    created_by?: boolean
    updated_at?: boolean
  }

  export type HouseholdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"household_id" | "name" | "created_by" | "updated_at", ExtArgs["result"]["household"]>
  export type HouseholdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Household$membersArgs<ExtArgs>
    invitations?: boolean | Household$invitationsArgs<ExtArgs>
    householdJoinRequests?: boolean | Household$householdJoinRequestsArgs<ExtArgs>
    categories?: boolean | Household$categoriesArgs<ExtArgs>
    _count?: boolean | HouseholdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HouseholdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HouseholdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Household"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$HouseholdMemberPayload<ExtArgs>[]
      invitations: Prisma.$HouseholdInvitationPayload<ExtArgs>[]
      householdJoinRequests: Prisma.$HouseholdJoinRequestPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      household_id: string
      name: string
      created_by: string
      updated_at: Date
    }, ExtArgs["result"]["household"]>
    composites: {}
  }

  type HouseholdGetPayload<S extends boolean | null | undefined | HouseholdDefaultArgs> = $Result.GetResult<Prisma.$HouseholdPayload, S>

  type HouseholdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdCountAggregateInputType | true
    }

  export interface HouseholdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Household'], meta: { name: 'Household' } }
    /**
     * Find zero or one Household that matches the filter.
     * @param {HouseholdFindUniqueArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdFindUniqueArgs>(args: SelectSubset<T, HouseholdFindUniqueArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Household that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdFindUniqueOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdFindFirstArgs>(args?: SelectSubset<T, HouseholdFindFirstArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Household that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindFirstOrThrowArgs} args - Arguments to find a Household
     * @example
     * // Get one Household
     * const household = await prisma.household.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Households that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Households
     * const households = await prisma.household.findMany()
     * 
     * // Get first 10 Households
     * const households = await prisma.household.findMany({ take: 10 })
     * 
     * // Only select the `household_id`
     * const householdWithHousehold_idOnly = await prisma.household.findMany({ select: { household_id: true } })
     * 
     */
    findMany<T extends HouseholdFindManyArgs>(args?: SelectSubset<T, HouseholdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Household.
     * @param {HouseholdCreateArgs} args - Arguments to create a Household.
     * @example
     * // Create one Household
     * const Household = await prisma.household.create({
     *   data: {
     *     // ... data to create a Household
     *   }
     * })
     * 
     */
    create<T extends HouseholdCreateArgs>(args: SelectSubset<T, HouseholdCreateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Households.
     * @param {HouseholdCreateManyArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdCreateManyArgs>(args?: SelectSubset<T, HouseholdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Households and returns the data saved in the database.
     * @param {HouseholdCreateManyAndReturnArgs} args - Arguments to create many Households.
     * @example
     * // Create many Households
     * const household = await prisma.household.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Households and only return the `household_id`
     * const householdWithHousehold_idOnly = await prisma.household.createManyAndReturn({
     *   select: { household_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Household.
     * @param {HouseholdDeleteArgs} args - Arguments to delete one Household.
     * @example
     * // Delete one Household
     * const Household = await prisma.household.delete({
     *   where: {
     *     // ... filter to delete one Household
     *   }
     * })
     * 
     */
    delete<T extends HouseholdDeleteArgs>(args: SelectSubset<T, HouseholdDeleteArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Household.
     * @param {HouseholdUpdateArgs} args - Arguments to update one Household.
     * @example
     * // Update one Household
     * const household = await prisma.household.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdUpdateArgs>(args: SelectSubset<T, HouseholdUpdateArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Households.
     * @param {HouseholdDeleteManyArgs} args - Arguments to filter Households to delete.
     * @example
     * // Delete a few Households
     * const { count } = await prisma.household.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdDeleteManyArgs>(args?: SelectSubset<T, HouseholdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdUpdateManyArgs>(args: SelectSubset<T, HouseholdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Households and returns the data updated in the database.
     * @param {HouseholdUpdateManyAndReturnArgs} args - Arguments to update many Households.
     * @example
     * // Update many Households
     * const household = await prisma.household.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Households and only return the `household_id`
     * const householdWithHousehold_idOnly = await prisma.household.updateManyAndReturn({
     *   select: { household_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseholdUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseholdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Household.
     * @param {HouseholdUpsertArgs} args - Arguments to update or create a Household.
     * @example
     * // Update or create a Household
     * const household = await prisma.household.upsert({
     *   create: {
     *     // ... data to create a Household
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Household we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdUpsertArgs>(args: SelectSubset<T, HouseholdUpsertArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Households.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdCountArgs} args - Arguments to filter Households to count.
     * @example
     * // Count the number of Households
     * const count = await prisma.household.count({
     *   where: {
     *     // ... the filter for the Households we want to count
     *   }
     * })
    **/
    count<T extends HouseholdCountArgs>(
      args?: Subset<T, HouseholdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseholdAggregateArgs>(args: Subset<T, HouseholdAggregateArgs>): Prisma.PrismaPromise<GetHouseholdAggregateType<T>>

    /**
     * Group by Household.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseholdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseholdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Household model
   */
  readonly fields: HouseholdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Household.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Household$membersArgs<ExtArgs> = {}>(args?: Subset<T, Household$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Household$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Household$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    householdJoinRequests<T extends Household$householdJoinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Household$householdJoinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Household$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Household$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Household model
   */
  interface HouseholdFieldRefs {
    readonly household_id: FieldRef<"Household", 'String'>
    readonly name: FieldRef<"Household", 'String'>
    readonly created_by: FieldRef<"Household", 'String'>
    readonly updated_at: FieldRef<"Household", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Household findUnique
   */
  export type HouseholdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findUniqueOrThrow
   */
  export type HouseholdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household findFirst
   */
  export type HouseholdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findFirstOrThrow
   */
  export type HouseholdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Household to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Households.
     */
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household findMany
   */
  export type HouseholdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter, which Households to fetch.
     */
    where?: HouseholdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Households to fetch.
     */
    orderBy?: HouseholdOrderByWithRelationInput | HouseholdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Households.
     */
    cursor?: HouseholdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Households from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Households.
     */
    skip?: number
    distinct?: HouseholdScalarFieldEnum | HouseholdScalarFieldEnum[]
  }

  /**
   * Household create
   */
  export type HouseholdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to create a Household.
     */
    data: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
  }

  /**
   * Household createMany
   */
  export type HouseholdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Household createManyAndReturn
   */
  export type HouseholdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * The data used to create many Households.
     */
    data: HouseholdCreateManyInput | HouseholdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Household update
   */
  export type HouseholdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The data needed to update a Household.
     */
    data: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
    /**
     * Choose, which Household to update.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household updateMany
   */
  export type HouseholdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
  }

  /**
   * Household updateManyAndReturn
   */
  export type HouseholdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * The data used to update Households.
     */
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyInput>
    /**
     * Filter which Households to update
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Household upsert
   */
  export type HouseholdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * The filter to search for the Household to update in case it exists.
     */
    where: HouseholdWhereUniqueInput
    /**
     * In case the Household found by the `where` argument doesn't exist, create a new Household with this data.
     */
    create: XOR<HouseholdCreateInput, HouseholdUncheckedCreateInput>
    /**
     * In case the Household was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdUpdateInput, HouseholdUncheckedUpdateInput>
  }

  /**
   * Household delete
   */
  export type HouseholdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
    /**
     * Filter which Household to delete.
     */
    where: HouseholdWhereUniqueInput
  }

  /**
   * Household deleteMany
   */
  export type HouseholdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Households to delete
     */
    where?: HouseholdWhereInput
    /**
     * Limit how many Households to delete.
     */
    limit?: number
  }

  /**
   * Household.members
   */
  export type Household$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    where?: HouseholdMemberWhereInput
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    cursor?: HouseholdMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * Household.invitations
   */
  export type Household$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    where?: HouseholdInvitationWhereInput
    orderBy?: HouseholdInvitationOrderByWithRelationInput | HouseholdInvitationOrderByWithRelationInput[]
    cursor?: HouseholdInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdInvitationScalarFieldEnum | HouseholdInvitationScalarFieldEnum[]
  }

  /**
   * Household.householdJoinRequests
   */
  export type Household$householdJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    where?: HouseholdJoinRequestWhereInput
    orderBy?: HouseholdJoinRequestOrderByWithRelationInput | HouseholdJoinRequestOrderByWithRelationInput[]
    cursor?: HouseholdJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseholdJoinRequestScalarFieldEnum | HouseholdJoinRequestScalarFieldEnum[]
  }

  /**
   * Household.categories
   */
  export type Household$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Household without action
   */
  export type HouseholdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Household
     */
    select?: HouseholdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Household
     */
    omit?: HouseholdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInclude<ExtArgs> | null
  }


  /**
   * Model HouseholdMember
   */

  export type AggregateHouseholdMember = {
    _count: HouseholdMemberCountAggregateOutputType | null
    _min: HouseholdMemberMinAggregateOutputType | null
    _max: HouseholdMemberMaxAggregateOutputType | null
  }

  export type HouseholdMemberMinAggregateOutputType = {
    household_id: string | null
    user_id: string | null
    role: $Enums.Role | null
  }

  export type HouseholdMemberMaxAggregateOutputType = {
    household_id: string | null
    user_id: string | null
    role: $Enums.Role | null
  }

  export type HouseholdMemberCountAggregateOutputType = {
    household_id: number
    user_id: number
    role: number
    _all: number
  }


  export type HouseholdMemberMinAggregateInputType = {
    household_id?: true
    user_id?: true
    role?: true
  }

  export type HouseholdMemberMaxAggregateInputType = {
    household_id?: true
    user_id?: true
    role?: true
  }

  export type HouseholdMemberCountAggregateInputType = {
    household_id?: true
    user_id?: true
    role?: true
    _all?: true
  }

  export type HouseholdMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseholdMember to aggregate.
     */
    where?: HouseholdMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdMembers to fetch.
     */
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HouseholdMembers
    **/
    _count?: true | HouseholdMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdMemberMaxAggregateInputType
  }

  export type GetHouseholdMemberAggregateType<T extends HouseholdMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateHouseholdMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouseholdMember[P]>
      : GetScalarType<T[P], AggregateHouseholdMember[P]>
  }




  export type HouseholdMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdMemberWhereInput
    orderBy?: HouseholdMemberOrderByWithAggregationInput | HouseholdMemberOrderByWithAggregationInput[]
    by: HouseholdMemberScalarFieldEnum[] | HouseholdMemberScalarFieldEnum
    having?: HouseholdMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdMemberCountAggregateInputType | true
    _min?: HouseholdMemberMinAggregateInputType
    _max?: HouseholdMemberMaxAggregateInputType
  }

  export type HouseholdMemberGroupByOutputType = {
    household_id: string
    user_id: string
    role: $Enums.Role
    _count: HouseholdMemberCountAggregateOutputType | null
    _min: HouseholdMemberMinAggregateOutputType | null
    _max: HouseholdMemberMaxAggregateOutputType | null
  }

  type GetHouseholdMemberGroupByPayload<T extends HouseholdMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdMemberGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdMemberGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    user_id?: boolean
    role?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdMember"]>

  export type HouseholdMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    user_id?: boolean
    role?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdMember"]>

  export type HouseholdMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    user_id?: boolean
    role?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdMember"]>

  export type HouseholdMemberSelectScalar = {
    household_id?: boolean
    user_id?: boolean
    role?: boolean
  }

  export type HouseholdMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"household_id" | "user_id" | "role", ExtArgs["result"]["householdMember"]>
  export type HouseholdMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HouseholdMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HouseholdMember"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      household_id: string
      user_id: string
      role: $Enums.Role
    }, ExtArgs["result"]["householdMember"]>
    composites: {}
  }

  type HouseholdMemberGetPayload<S extends boolean | null | undefined | HouseholdMemberDefaultArgs> = $Result.GetResult<Prisma.$HouseholdMemberPayload, S>

  type HouseholdMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdMemberCountAggregateInputType | true
    }

  export interface HouseholdMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HouseholdMember'], meta: { name: 'HouseholdMember' } }
    /**
     * Find zero or one HouseholdMember that matches the filter.
     * @param {HouseholdMemberFindUniqueArgs} args - Arguments to find a HouseholdMember
     * @example
     * // Get one HouseholdMember
     * const householdMember = await prisma.householdMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdMemberFindUniqueArgs>(args: SelectSubset<T, HouseholdMemberFindUniqueArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HouseholdMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdMemberFindUniqueOrThrowArgs} args - Arguments to find a HouseholdMember
     * @example
     * // Get one HouseholdMember
     * const householdMember = await prisma.householdMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseholdMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberFindFirstArgs} args - Arguments to find a HouseholdMember
     * @example
     * // Get one HouseholdMember
     * const householdMember = await prisma.householdMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdMemberFindFirstArgs>(args?: SelectSubset<T, HouseholdMemberFindFirstArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseholdMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberFindFirstOrThrowArgs} args - Arguments to find a HouseholdMember
     * @example
     * // Get one HouseholdMember
     * const householdMember = await prisma.householdMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HouseholdMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HouseholdMembers
     * const householdMembers = await prisma.householdMember.findMany()
     * 
     * // Get first 10 HouseholdMembers
     * const householdMembers = await prisma.householdMember.findMany({ take: 10 })
     * 
     * // Only select the `household_id`
     * const householdMemberWithHousehold_idOnly = await prisma.householdMember.findMany({ select: { household_id: true } })
     * 
     */
    findMany<T extends HouseholdMemberFindManyArgs>(args?: SelectSubset<T, HouseholdMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HouseholdMember.
     * @param {HouseholdMemberCreateArgs} args - Arguments to create a HouseholdMember.
     * @example
     * // Create one HouseholdMember
     * const HouseholdMember = await prisma.householdMember.create({
     *   data: {
     *     // ... data to create a HouseholdMember
     *   }
     * })
     * 
     */
    create<T extends HouseholdMemberCreateArgs>(args: SelectSubset<T, HouseholdMemberCreateArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HouseholdMembers.
     * @param {HouseholdMemberCreateManyArgs} args - Arguments to create many HouseholdMembers.
     * @example
     * // Create many HouseholdMembers
     * const householdMember = await prisma.householdMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdMemberCreateManyArgs>(args?: SelectSubset<T, HouseholdMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HouseholdMembers and returns the data saved in the database.
     * @param {HouseholdMemberCreateManyAndReturnArgs} args - Arguments to create many HouseholdMembers.
     * @example
     * // Create many HouseholdMembers
     * const householdMember = await prisma.householdMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HouseholdMembers and only return the `household_id`
     * const householdMemberWithHousehold_idOnly = await prisma.householdMember.createManyAndReturn({
     *   select: { household_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HouseholdMember.
     * @param {HouseholdMemberDeleteArgs} args - Arguments to delete one HouseholdMember.
     * @example
     * // Delete one HouseholdMember
     * const HouseholdMember = await prisma.householdMember.delete({
     *   where: {
     *     // ... filter to delete one HouseholdMember
     *   }
     * })
     * 
     */
    delete<T extends HouseholdMemberDeleteArgs>(args: SelectSubset<T, HouseholdMemberDeleteArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HouseholdMember.
     * @param {HouseholdMemberUpdateArgs} args - Arguments to update one HouseholdMember.
     * @example
     * // Update one HouseholdMember
     * const householdMember = await prisma.householdMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdMemberUpdateArgs>(args: SelectSubset<T, HouseholdMemberUpdateArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HouseholdMembers.
     * @param {HouseholdMemberDeleteManyArgs} args - Arguments to filter HouseholdMembers to delete.
     * @example
     * // Delete a few HouseholdMembers
     * const { count } = await prisma.householdMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdMemberDeleteManyArgs>(args?: SelectSubset<T, HouseholdMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseholdMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HouseholdMembers
     * const householdMember = await prisma.householdMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdMemberUpdateManyArgs>(args: SelectSubset<T, HouseholdMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseholdMembers and returns the data updated in the database.
     * @param {HouseholdMemberUpdateManyAndReturnArgs} args - Arguments to update many HouseholdMembers.
     * @example
     * // Update many HouseholdMembers
     * const householdMember = await prisma.householdMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HouseholdMembers and only return the `household_id`
     * const householdMemberWithHousehold_idOnly = await prisma.householdMember.updateManyAndReturn({
     *   select: { household_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseholdMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseholdMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HouseholdMember.
     * @param {HouseholdMemberUpsertArgs} args - Arguments to update or create a HouseholdMember.
     * @example
     * // Update or create a HouseholdMember
     * const householdMember = await prisma.householdMember.upsert({
     *   create: {
     *     // ... data to create a HouseholdMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HouseholdMember we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdMemberUpsertArgs>(args: SelectSubset<T, HouseholdMemberUpsertArgs<ExtArgs>>): Prisma__HouseholdMemberClient<$Result.GetResult<Prisma.$HouseholdMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HouseholdMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberCountArgs} args - Arguments to filter HouseholdMembers to count.
     * @example
     * // Count the number of HouseholdMembers
     * const count = await prisma.householdMember.count({
     *   where: {
     *     // ... the filter for the HouseholdMembers we want to count
     *   }
     * })
    **/
    count<T extends HouseholdMemberCountArgs>(
      args?: Subset<T, HouseholdMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HouseholdMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseholdMemberAggregateArgs>(args: Subset<T, HouseholdMemberAggregateArgs>): Prisma.PrismaPromise<GetHouseholdMemberAggregateType<T>>

    /**
     * Group by HouseholdMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseholdMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdMemberGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseholdMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HouseholdMember model
   */
  readonly fields: HouseholdMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HouseholdMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HouseholdMember model
   */
  interface HouseholdMemberFieldRefs {
    readonly household_id: FieldRef<"HouseholdMember", 'String'>
    readonly user_id: FieldRef<"HouseholdMember", 'String'>
    readonly role: FieldRef<"HouseholdMember", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * HouseholdMember findUnique
   */
  export type HouseholdMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMember to fetch.
     */
    where: HouseholdMemberWhereUniqueInput
  }

  /**
   * HouseholdMember findUniqueOrThrow
   */
  export type HouseholdMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMember to fetch.
     */
    where: HouseholdMemberWhereUniqueInput
  }

  /**
   * HouseholdMember findFirst
   */
  export type HouseholdMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMember to fetch.
     */
    where?: HouseholdMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdMembers to fetch.
     */
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseholdMembers.
     */
    cursor?: HouseholdMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseholdMembers.
     */
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * HouseholdMember findFirstOrThrow
   */
  export type HouseholdMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMember to fetch.
     */
    where?: HouseholdMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdMembers to fetch.
     */
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseholdMembers.
     */
    cursor?: HouseholdMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseholdMembers.
     */
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * HouseholdMember findMany
   */
  export type HouseholdMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdMembers to fetch.
     */
    where?: HouseholdMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdMembers to fetch.
     */
    orderBy?: HouseholdMemberOrderByWithRelationInput | HouseholdMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HouseholdMembers.
     */
    cursor?: HouseholdMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdMembers.
     */
    skip?: number
    distinct?: HouseholdMemberScalarFieldEnum | HouseholdMemberScalarFieldEnum[]
  }

  /**
   * HouseholdMember create
   */
  export type HouseholdMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a HouseholdMember.
     */
    data: XOR<HouseholdMemberCreateInput, HouseholdMemberUncheckedCreateInput>
  }

  /**
   * HouseholdMember createMany
   */
  export type HouseholdMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HouseholdMembers.
     */
    data: HouseholdMemberCreateManyInput | HouseholdMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HouseholdMember createManyAndReturn
   */
  export type HouseholdMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * The data used to create many HouseholdMembers.
     */
    data: HouseholdMemberCreateManyInput | HouseholdMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HouseholdMember update
   */
  export type HouseholdMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a HouseholdMember.
     */
    data: XOR<HouseholdMemberUpdateInput, HouseholdMemberUncheckedUpdateInput>
    /**
     * Choose, which HouseholdMember to update.
     */
    where: HouseholdMemberWhereUniqueInput
  }

  /**
   * HouseholdMember updateMany
   */
  export type HouseholdMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HouseholdMembers.
     */
    data: XOR<HouseholdMemberUpdateManyMutationInput, HouseholdMemberUncheckedUpdateManyInput>
    /**
     * Filter which HouseholdMembers to update
     */
    where?: HouseholdMemberWhereInput
    /**
     * Limit how many HouseholdMembers to update.
     */
    limit?: number
  }

  /**
   * HouseholdMember updateManyAndReturn
   */
  export type HouseholdMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * The data used to update HouseholdMembers.
     */
    data: XOR<HouseholdMemberUpdateManyMutationInput, HouseholdMemberUncheckedUpdateManyInput>
    /**
     * Filter which HouseholdMembers to update
     */
    where?: HouseholdMemberWhereInput
    /**
     * Limit how many HouseholdMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HouseholdMember upsert
   */
  export type HouseholdMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the HouseholdMember to update in case it exists.
     */
    where: HouseholdMemberWhereUniqueInput
    /**
     * In case the HouseholdMember found by the `where` argument doesn't exist, create a new HouseholdMember with this data.
     */
    create: XOR<HouseholdMemberCreateInput, HouseholdMemberUncheckedCreateInput>
    /**
     * In case the HouseholdMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdMemberUpdateInput, HouseholdMemberUncheckedUpdateInput>
  }

  /**
   * HouseholdMember delete
   */
  export type HouseholdMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
    /**
     * Filter which HouseholdMember to delete.
     */
    where: HouseholdMemberWhereUniqueInput
  }

  /**
   * HouseholdMember deleteMany
   */
  export type HouseholdMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseholdMembers to delete
     */
    where?: HouseholdMemberWhereInput
    /**
     * Limit how many HouseholdMembers to delete.
     */
    limit?: number
  }

  /**
   * HouseholdMember without action
   */
  export type HouseholdMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdMember
     */
    select?: HouseholdMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdMember
     */
    omit?: HouseholdMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdMemberInclude<ExtArgs> | null
  }


  /**
   * Model HouseholdInvitation
   */

  export type AggregateHouseholdInvitation = {
    _count: HouseholdInvitationCountAggregateOutputType | null
    _min: HouseholdInvitationMinAggregateOutputType | null
    _max: HouseholdInvitationMaxAggregateOutputType | null
  }

  export type HouseholdInvitationMinAggregateOutputType = {
    invitation_id: string | null
    household_id: string | null
    code: string | null
    invited_by: string | null
    email: string | null
    created_at: Date | null
    expires_at: Date | null
    status: $Enums.InvitationStatus | null
  }

  export type HouseholdInvitationMaxAggregateOutputType = {
    invitation_id: string | null
    household_id: string | null
    code: string | null
    invited_by: string | null
    email: string | null
    created_at: Date | null
    expires_at: Date | null
    status: $Enums.InvitationStatus | null
  }

  export type HouseholdInvitationCountAggregateOutputType = {
    invitation_id: number
    household_id: number
    code: number
    invited_by: number
    email: number
    created_at: number
    expires_at: number
    status: number
    _all: number
  }


  export type HouseholdInvitationMinAggregateInputType = {
    invitation_id?: true
    household_id?: true
    code?: true
    invited_by?: true
    email?: true
    created_at?: true
    expires_at?: true
    status?: true
  }

  export type HouseholdInvitationMaxAggregateInputType = {
    invitation_id?: true
    household_id?: true
    code?: true
    invited_by?: true
    email?: true
    created_at?: true
    expires_at?: true
    status?: true
  }

  export type HouseholdInvitationCountAggregateInputType = {
    invitation_id?: true
    household_id?: true
    code?: true
    invited_by?: true
    email?: true
    created_at?: true
    expires_at?: true
    status?: true
    _all?: true
  }

  export type HouseholdInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseholdInvitation to aggregate.
     */
    where?: HouseholdInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdInvitations to fetch.
     */
    orderBy?: HouseholdInvitationOrderByWithRelationInput | HouseholdInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HouseholdInvitations
    **/
    _count?: true | HouseholdInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdInvitationMaxAggregateInputType
  }

  export type GetHouseholdInvitationAggregateType<T extends HouseholdInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateHouseholdInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouseholdInvitation[P]>
      : GetScalarType<T[P], AggregateHouseholdInvitation[P]>
  }




  export type HouseholdInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdInvitationWhereInput
    orderBy?: HouseholdInvitationOrderByWithAggregationInput | HouseholdInvitationOrderByWithAggregationInput[]
    by: HouseholdInvitationScalarFieldEnum[] | HouseholdInvitationScalarFieldEnum
    having?: HouseholdInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdInvitationCountAggregateInputType | true
    _min?: HouseholdInvitationMinAggregateInputType
    _max?: HouseholdInvitationMaxAggregateInputType
  }

  export type HouseholdInvitationGroupByOutputType = {
    invitation_id: string
    household_id: string
    code: string
    invited_by: string
    email: string
    created_at: Date
    expires_at: Date
    status: $Enums.InvitationStatus
    _count: HouseholdInvitationCountAggregateOutputType | null
    _min: HouseholdInvitationMinAggregateOutputType | null
    _max: HouseholdInvitationMaxAggregateOutputType | null
  }

  type GetHouseholdInvitationGroupByPayload<T extends HouseholdInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdInvitationGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invitation_id?: boolean
    household_id?: boolean
    code?: boolean
    invited_by?: boolean
    email?: boolean
    created_at?: boolean
    expires_at?: boolean
    status?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdInvitation"]>

  export type HouseholdInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invitation_id?: boolean
    household_id?: boolean
    code?: boolean
    invited_by?: boolean
    email?: boolean
    created_at?: boolean
    expires_at?: boolean
    status?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdInvitation"]>

  export type HouseholdInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invitation_id?: boolean
    household_id?: boolean
    code?: boolean
    invited_by?: boolean
    email?: boolean
    created_at?: boolean
    expires_at?: boolean
    status?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdInvitation"]>

  export type HouseholdInvitationSelectScalar = {
    invitation_id?: boolean
    household_id?: boolean
    code?: boolean
    invited_by?: boolean
    email?: boolean
    created_at?: boolean
    expires_at?: boolean
    status?: boolean
  }

  export type HouseholdInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"invitation_id" | "household_id" | "code" | "invited_by" | "email" | "created_at" | "expires_at" | "status", ExtArgs["result"]["householdInvitation"]>
  export type HouseholdInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HouseholdInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HouseholdInvitation"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      inviter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      invitation_id: string
      household_id: string
      code: string
      invited_by: string
      email: string
      created_at: Date
      expires_at: Date
      status: $Enums.InvitationStatus
    }, ExtArgs["result"]["householdInvitation"]>
    composites: {}
  }

  type HouseholdInvitationGetPayload<S extends boolean | null | undefined | HouseholdInvitationDefaultArgs> = $Result.GetResult<Prisma.$HouseholdInvitationPayload, S>

  type HouseholdInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdInvitationCountAggregateInputType | true
    }

  export interface HouseholdInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HouseholdInvitation'], meta: { name: 'HouseholdInvitation' } }
    /**
     * Find zero or one HouseholdInvitation that matches the filter.
     * @param {HouseholdInvitationFindUniqueArgs} args - Arguments to find a HouseholdInvitation
     * @example
     * // Get one HouseholdInvitation
     * const householdInvitation = await prisma.householdInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdInvitationFindUniqueArgs>(args: SelectSubset<T, HouseholdInvitationFindUniqueArgs<ExtArgs>>): Prisma__HouseholdInvitationClient<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HouseholdInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdInvitationFindUniqueOrThrowArgs} args - Arguments to find a HouseholdInvitation
     * @example
     * // Get one HouseholdInvitation
     * const householdInvitation = await prisma.householdInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdInvitationClient<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseholdInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdInvitationFindFirstArgs} args - Arguments to find a HouseholdInvitation
     * @example
     * // Get one HouseholdInvitation
     * const householdInvitation = await prisma.householdInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdInvitationFindFirstArgs>(args?: SelectSubset<T, HouseholdInvitationFindFirstArgs<ExtArgs>>): Prisma__HouseholdInvitationClient<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseholdInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdInvitationFindFirstOrThrowArgs} args - Arguments to find a HouseholdInvitation
     * @example
     * // Get one HouseholdInvitation
     * const householdInvitation = await prisma.householdInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdInvitationClient<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HouseholdInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HouseholdInvitations
     * const householdInvitations = await prisma.householdInvitation.findMany()
     * 
     * // Get first 10 HouseholdInvitations
     * const householdInvitations = await prisma.householdInvitation.findMany({ take: 10 })
     * 
     * // Only select the `invitation_id`
     * const householdInvitationWithInvitation_idOnly = await prisma.householdInvitation.findMany({ select: { invitation_id: true } })
     * 
     */
    findMany<T extends HouseholdInvitationFindManyArgs>(args?: SelectSubset<T, HouseholdInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HouseholdInvitation.
     * @param {HouseholdInvitationCreateArgs} args - Arguments to create a HouseholdInvitation.
     * @example
     * // Create one HouseholdInvitation
     * const HouseholdInvitation = await prisma.householdInvitation.create({
     *   data: {
     *     // ... data to create a HouseholdInvitation
     *   }
     * })
     * 
     */
    create<T extends HouseholdInvitationCreateArgs>(args: SelectSubset<T, HouseholdInvitationCreateArgs<ExtArgs>>): Prisma__HouseholdInvitationClient<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HouseholdInvitations.
     * @param {HouseholdInvitationCreateManyArgs} args - Arguments to create many HouseholdInvitations.
     * @example
     * // Create many HouseholdInvitations
     * const householdInvitation = await prisma.householdInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdInvitationCreateManyArgs>(args?: SelectSubset<T, HouseholdInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HouseholdInvitations and returns the data saved in the database.
     * @param {HouseholdInvitationCreateManyAndReturnArgs} args - Arguments to create many HouseholdInvitations.
     * @example
     * // Create many HouseholdInvitations
     * const householdInvitation = await prisma.householdInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HouseholdInvitations and only return the `invitation_id`
     * const householdInvitationWithInvitation_idOnly = await prisma.householdInvitation.createManyAndReturn({
     *   select: { invitation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HouseholdInvitation.
     * @param {HouseholdInvitationDeleteArgs} args - Arguments to delete one HouseholdInvitation.
     * @example
     * // Delete one HouseholdInvitation
     * const HouseholdInvitation = await prisma.householdInvitation.delete({
     *   where: {
     *     // ... filter to delete one HouseholdInvitation
     *   }
     * })
     * 
     */
    delete<T extends HouseholdInvitationDeleteArgs>(args: SelectSubset<T, HouseholdInvitationDeleteArgs<ExtArgs>>): Prisma__HouseholdInvitationClient<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HouseholdInvitation.
     * @param {HouseholdInvitationUpdateArgs} args - Arguments to update one HouseholdInvitation.
     * @example
     * // Update one HouseholdInvitation
     * const householdInvitation = await prisma.householdInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdInvitationUpdateArgs>(args: SelectSubset<T, HouseholdInvitationUpdateArgs<ExtArgs>>): Prisma__HouseholdInvitationClient<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HouseholdInvitations.
     * @param {HouseholdInvitationDeleteManyArgs} args - Arguments to filter HouseholdInvitations to delete.
     * @example
     * // Delete a few HouseholdInvitations
     * const { count } = await prisma.householdInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdInvitationDeleteManyArgs>(args?: SelectSubset<T, HouseholdInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseholdInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HouseholdInvitations
     * const householdInvitation = await prisma.householdInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdInvitationUpdateManyArgs>(args: SelectSubset<T, HouseholdInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseholdInvitations and returns the data updated in the database.
     * @param {HouseholdInvitationUpdateManyAndReturnArgs} args - Arguments to update many HouseholdInvitations.
     * @example
     * // Update many HouseholdInvitations
     * const householdInvitation = await prisma.householdInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HouseholdInvitations and only return the `invitation_id`
     * const householdInvitationWithInvitation_idOnly = await prisma.householdInvitation.updateManyAndReturn({
     *   select: { invitation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseholdInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseholdInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HouseholdInvitation.
     * @param {HouseholdInvitationUpsertArgs} args - Arguments to update or create a HouseholdInvitation.
     * @example
     * // Update or create a HouseholdInvitation
     * const householdInvitation = await prisma.householdInvitation.upsert({
     *   create: {
     *     // ... data to create a HouseholdInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HouseholdInvitation we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdInvitationUpsertArgs>(args: SelectSubset<T, HouseholdInvitationUpsertArgs<ExtArgs>>): Prisma__HouseholdInvitationClient<$Result.GetResult<Prisma.$HouseholdInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HouseholdInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdInvitationCountArgs} args - Arguments to filter HouseholdInvitations to count.
     * @example
     * // Count the number of HouseholdInvitations
     * const count = await prisma.householdInvitation.count({
     *   where: {
     *     // ... the filter for the HouseholdInvitations we want to count
     *   }
     * })
    **/
    count<T extends HouseholdInvitationCountArgs>(
      args?: Subset<T, HouseholdInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HouseholdInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseholdInvitationAggregateArgs>(args: Subset<T, HouseholdInvitationAggregateArgs>): Prisma.PrismaPromise<GetHouseholdInvitationAggregateType<T>>

    /**
     * Group by HouseholdInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdInvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseholdInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdInvitationGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdInvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseholdInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HouseholdInvitation model
   */
  readonly fields: HouseholdInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HouseholdInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HouseholdInvitation model
   */
  interface HouseholdInvitationFieldRefs {
    readonly invitation_id: FieldRef<"HouseholdInvitation", 'String'>
    readonly household_id: FieldRef<"HouseholdInvitation", 'String'>
    readonly code: FieldRef<"HouseholdInvitation", 'String'>
    readonly invited_by: FieldRef<"HouseholdInvitation", 'String'>
    readonly email: FieldRef<"HouseholdInvitation", 'String'>
    readonly created_at: FieldRef<"HouseholdInvitation", 'DateTime'>
    readonly expires_at: FieldRef<"HouseholdInvitation", 'DateTime'>
    readonly status: FieldRef<"HouseholdInvitation", 'InvitationStatus'>
  }
    

  // Custom InputTypes
  /**
   * HouseholdInvitation findUnique
   */
  export type HouseholdInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdInvitation to fetch.
     */
    where: HouseholdInvitationWhereUniqueInput
  }

  /**
   * HouseholdInvitation findUniqueOrThrow
   */
  export type HouseholdInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdInvitation to fetch.
     */
    where: HouseholdInvitationWhereUniqueInput
  }

  /**
   * HouseholdInvitation findFirst
   */
  export type HouseholdInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdInvitation to fetch.
     */
    where?: HouseholdInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdInvitations to fetch.
     */
    orderBy?: HouseholdInvitationOrderByWithRelationInput | HouseholdInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseholdInvitations.
     */
    cursor?: HouseholdInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseholdInvitations.
     */
    distinct?: HouseholdInvitationScalarFieldEnum | HouseholdInvitationScalarFieldEnum[]
  }

  /**
   * HouseholdInvitation findFirstOrThrow
   */
  export type HouseholdInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdInvitation to fetch.
     */
    where?: HouseholdInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdInvitations to fetch.
     */
    orderBy?: HouseholdInvitationOrderByWithRelationInput | HouseholdInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseholdInvitations.
     */
    cursor?: HouseholdInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseholdInvitations.
     */
    distinct?: HouseholdInvitationScalarFieldEnum | HouseholdInvitationScalarFieldEnum[]
  }

  /**
   * HouseholdInvitation findMany
   */
  export type HouseholdInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdInvitations to fetch.
     */
    where?: HouseholdInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdInvitations to fetch.
     */
    orderBy?: HouseholdInvitationOrderByWithRelationInput | HouseholdInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HouseholdInvitations.
     */
    cursor?: HouseholdInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdInvitations.
     */
    skip?: number
    distinct?: HouseholdInvitationScalarFieldEnum | HouseholdInvitationScalarFieldEnum[]
  }

  /**
   * HouseholdInvitation create
   */
  export type HouseholdInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a HouseholdInvitation.
     */
    data: XOR<HouseholdInvitationCreateInput, HouseholdInvitationUncheckedCreateInput>
  }

  /**
   * HouseholdInvitation createMany
   */
  export type HouseholdInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HouseholdInvitations.
     */
    data: HouseholdInvitationCreateManyInput | HouseholdInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HouseholdInvitation createManyAndReturn
   */
  export type HouseholdInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many HouseholdInvitations.
     */
    data: HouseholdInvitationCreateManyInput | HouseholdInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HouseholdInvitation update
   */
  export type HouseholdInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a HouseholdInvitation.
     */
    data: XOR<HouseholdInvitationUpdateInput, HouseholdInvitationUncheckedUpdateInput>
    /**
     * Choose, which HouseholdInvitation to update.
     */
    where: HouseholdInvitationWhereUniqueInput
  }

  /**
   * HouseholdInvitation updateMany
   */
  export type HouseholdInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HouseholdInvitations.
     */
    data: XOR<HouseholdInvitationUpdateManyMutationInput, HouseholdInvitationUncheckedUpdateManyInput>
    /**
     * Filter which HouseholdInvitations to update
     */
    where?: HouseholdInvitationWhereInput
    /**
     * Limit how many HouseholdInvitations to update.
     */
    limit?: number
  }

  /**
   * HouseholdInvitation updateManyAndReturn
   */
  export type HouseholdInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * The data used to update HouseholdInvitations.
     */
    data: XOR<HouseholdInvitationUpdateManyMutationInput, HouseholdInvitationUncheckedUpdateManyInput>
    /**
     * Filter which HouseholdInvitations to update
     */
    where?: HouseholdInvitationWhereInput
    /**
     * Limit how many HouseholdInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HouseholdInvitation upsert
   */
  export type HouseholdInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the HouseholdInvitation to update in case it exists.
     */
    where: HouseholdInvitationWhereUniqueInput
    /**
     * In case the HouseholdInvitation found by the `where` argument doesn't exist, create a new HouseholdInvitation with this data.
     */
    create: XOR<HouseholdInvitationCreateInput, HouseholdInvitationUncheckedCreateInput>
    /**
     * In case the HouseholdInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdInvitationUpdateInput, HouseholdInvitationUncheckedUpdateInput>
  }

  /**
   * HouseholdInvitation delete
   */
  export type HouseholdInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
    /**
     * Filter which HouseholdInvitation to delete.
     */
    where: HouseholdInvitationWhereUniqueInput
  }

  /**
   * HouseholdInvitation deleteMany
   */
  export type HouseholdInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseholdInvitations to delete
     */
    where?: HouseholdInvitationWhereInput
    /**
     * Limit how many HouseholdInvitations to delete.
     */
    limit?: number
  }

  /**
   * HouseholdInvitation without action
   */
  export type HouseholdInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdInvitation
     */
    select?: HouseholdInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdInvitation
     */
    omit?: HouseholdInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdInvitationInclude<ExtArgs> | null
  }


  /**
   * Model HouseholdJoinRequest
   */

  export type AggregateHouseholdJoinRequest = {
    _count: HouseholdJoinRequestCountAggregateOutputType | null
    _min: HouseholdJoinRequestMinAggregateOutputType | null
    _max: HouseholdJoinRequestMaxAggregateOutputType | null
  }

  export type HouseholdJoinRequestMinAggregateOutputType = {
    household_id: string | null
    requested_by: string | null
    status: $Enums.JoinRequestStatus | null
    created_at: Date | null
  }

  export type HouseholdJoinRequestMaxAggregateOutputType = {
    household_id: string | null
    requested_by: string | null
    status: $Enums.JoinRequestStatus | null
    created_at: Date | null
  }

  export type HouseholdJoinRequestCountAggregateOutputType = {
    household_id: number
    requested_by: number
    status: number
    created_at: number
    _all: number
  }


  export type HouseholdJoinRequestMinAggregateInputType = {
    household_id?: true
    requested_by?: true
    status?: true
    created_at?: true
  }

  export type HouseholdJoinRequestMaxAggregateInputType = {
    household_id?: true
    requested_by?: true
    status?: true
    created_at?: true
  }

  export type HouseholdJoinRequestCountAggregateInputType = {
    household_id?: true
    requested_by?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type HouseholdJoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseholdJoinRequest to aggregate.
     */
    where?: HouseholdJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdJoinRequests to fetch.
     */
    orderBy?: HouseholdJoinRequestOrderByWithRelationInput | HouseholdJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseholdJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HouseholdJoinRequests
    **/
    _count?: true | HouseholdJoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseholdJoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseholdJoinRequestMaxAggregateInputType
  }

  export type GetHouseholdJoinRequestAggregateType<T extends HouseholdJoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateHouseholdJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouseholdJoinRequest[P]>
      : GetScalarType<T[P], AggregateHouseholdJoinRequest[P]>
  }




  export type HouseholdJoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseholdJoinRequestWhereInput
    orderBy?: HouseholdJoinRequestOrderByWithAggregationInput | HouseholdJoinRequestOrderByWithAggregationInput[]
    by: HouseholdJoinRequestScalarFieldEnum[] | HouseholdJoinRequestScalarFieldEnum
    having?: HouseholdJoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseholdJoinRequestCountAggregateInputType | true
    _min?: HouseholdJoinRequestMinAggregateInputType
    _max?: HouseholdJoinRequestMaxAggregateInputType
  }

  export type HouseholdJoinRequestGroupByOutputType = {
    household_id: string
    requested_by: string
    status: $Enums.JoinRequestStatus
    created_at: Date
    _count: HouseholdJoinRequestCountAggregateOutputType | null
    _min: HouseholdJoinRequestMinAggregateOutputType | null
    _max: HouseholdJoinRequestMaxAggregateOutputType | null
  }

  type GetHouseholdJoinRequestGroupByPayload<T extends HouseholdJoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseholdJoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseholdJoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseholdJoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], HouseholdJoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type HouseholdJoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    requested_by?: boolean
    status?: boolean
    created_at?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdJoinRequest"]>

  export type HouseholdJoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    requested_by?: boolean
    status?: boolean
    created_at?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdJoinRequest"]>

  export type HouseholdJoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    household_id?: boolean
    requested_by?: boolean
    status?: boolean
    created_at?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["householdJoinRequest"]>

  export type HouseholdJoinRequestSelectScalar = {
    household_id?: boolean
    requested_by?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type HouseholdJoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"household_id" | "requested_by" | "status" | "created_at", ExtArgs["result"]["householdJoinRequest"]>
  export type HouseholdJoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdJoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HouseholdJoinRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HouseholdJoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HouseholdJoinRequest"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      household_id: string
      requested_by: string
      status: $Enums.JoinRequestStatus
      created_at: Date
    }, ExtArgs["result"]["householdJoinRequest"]>
    composites: {}
  }

  type HouseholdJoinRequestGetPayload<S extends boolean | null | undefined | HouseholdJoinRequestDefaultArgs> = $Result.GetResult<Prisma.$HouseholdJoinRequestPayload, S>

  type HouseholdJoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseholdJoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseholdJoinRequestCountAggregateInputType | true
    }

  export interface HouseholdJoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HouseholdJoinRequest'], meta: { name: 'HouseholdJoinRequest' } }
    /**
     * Find zero or one HouseholdJoinRequest that matches the filter.
     * @param {HouseholdJoinRequestFindUniqueArgs} args - Arguments to find a HouseholdJoinRequest
     * @example
     * // Get one HouseholdJoinRequest
     * const householdJoinRequest = await prisma.householdJoinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseholdJoinRequestFindUniqueArgs>(args: SelectSubset<T, HouseholdJoinRequestFindUniqueArgs<ExtArgs>>): Prisma__HouseholdJoinRequestClient<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HouseholdJoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseholdJoinRequestFindUniqueOrThrowArgs} args - Arguments to find a HouseholdJoinRequest
     * @example
     * // Get one HouseholdJoinRequest
     * const householdJoinRequest = await prisma.householdJoinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseholdJoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseholdJoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseholdJoinRequestClient<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseholdJoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdJoinRequestFindFirstArgs} args - Arguments to find a HouseholdJoinRequest
     * @example
     * // Get one HouseholdJoinRequest
     * const householdJoinRequest = await prisma.householdJoinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseholdJoinRequestFindFirstArgs>(args?: SelectSubset<T, HouseholdJoinRequestFindFirstArgs<ExtArgs>>): Prisma__HouseholdJoinRequestClient<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseholdJoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdJoinRequestFindFirstOrThrowArgs} args - Arguments to find a HouseholdJoinRequest
     * @example
     * // Get one HouseholdJoinRequest
     * const householdJoinRequest = await prisma.householdJoinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseholdJoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseholdJoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseholdJoinRequestClient<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HouseholdJoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdJoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HouseholdJoinRequests
     * const householdJoinRequests = await prisma.householdJoinRequest.findMany()
     * 
     * // Get first 10 HouseholdJoinRequests
     * const householdJoinRequests = await prisma.householdJoinRequest.findMany({ take: 10 })
     * 
     * // Only select the `household_id`
     * const householdJoinRequestWithHousehold_idOnly = await prisma.householdJoinRequest.findMany({ select: { household_id: true } })
     * 
     */
    findMany<T extends HouseholdJoinRequestFindManyArgs>(args?: SelectSubset<T, HouseholdJoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HouseholdJoinRequest.
     * @param {HouseholdJoinRequestCreateArgs} args - Arguments to create a HouseholdJoinRequest.
     * @example
     * // Create one HouseholdJoinRequest
     * const HouseholdJoinRequest = await prisma.householdJoinRequest.create({
     *   data: {
     *     // ... data to create a HouseholdJoinRequest
     *   }
     * })
     * 
     */
    create<T extends HouseholdJoinRequestCreateArgs>(args: SelectSubset<T, HouseholdJoinRequestCreateArgs<ExtArgs>>): Prisma__HouseholdJoinRequestClient<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HouseholdJoinRequests.
     * @param {HouseholdJoinRequestCreateManyArgs} args - Arguments to create many HouseholdJoinRequests.
     * @example
     * // Create many HouseholdJoinRequests
     * const householdJoinRequest = await prisma.householdJoinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseholdJoinRequestCreateManyArgs>(args?: SelectSubset<T, HouseholdJoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HouseholdJoinRequests and returns the data saved in the database.
     * @param {HouseholdJoinRequestCreateManyAndReturnArgs} args - Arguments to create many HouseholdJoinRequests.
     * @example
     * // Create many HouseholdJoinRequests
     * const householdJoinRequest = await prisma.householdJoinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HouseholdJoinRequests and only return the `household_id`
     * const householdJoinRequestWithHousehold_idOnly = await prisma.householdJoinRequest.createManyAndReturn({
     *   select: { household_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseholdJoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseholdJoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HouseholdJoinRequest.
     * @param {HouseholdJoinRequestDeleteArgs} args - Arguments to delete one HouseholdJoinRequest.
     * @example
     * // Delete one HouseholdJoinRequest
     * const HouseholdJoinRequest = await prisma.householdJoinRequest.delete({
     *   where: {
     *     // ... filter to delete one HouseholdJoinRequest
     *   }
     * })
     * 
     */
    delete<T extends HouseholdJoinRequestDeleteArgs>(args: SelectSubset<T, HouseholdJoinRequestDeleteArgs<ExtArgs>>): Prisma__HouseholdJoinRequestClient<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HouseholdJoinRequest.
     * @param {HouseholdJoinRequestUpdateArgs} args - Arguments to update one HouseholdJoinRequest.
     * @example
     * // Update one HouseholdJoinRequest
     * const householdJoinRequest = await prisma.householdJoinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseholdJoinRequestUpdateArgs>(args: SelectSubset<T, HouseholdJoinRequestUpdateArgs<ExtArgs>>): Prisma__HouseholdJoinRequestClient<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HouseholdJoinRequests.
     * @param {HouseholdJoinRequestDeleteManyArgs} args - Arguments to filter HouseholdJoinRequests to delete.
     * @example
     * // Delete a few HouseholdJoinRequests
     * const { count } = await prisma.householdJoinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseholdJoinRequestDeleteManyArgs>(args?: SelectSubset<T, HouseholdJoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseholdJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdJoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HouseholdJoinRequests
     * const householdJoinRequest = await prisma.householdJoinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseholdJoinRequestUpdateManyArgs>(args: SelectSubset<T, HouseholdJoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseholdJoinRequests and returns the data updated in the database.
     * @param {HouseholdJoinRequestUpdateManyAndReturnArgs} args - Arguments to update many HouseholdJoinRequests.
     * @example
     * // Update many HouseholdJoinRequests
     * const householdJoinRequest = await prisma.householdJoinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HouseholdJoinRequests and only return the `household_id`
     * const householdJoinRequestWithHousehold_idOnly = await prisma.householdJoinRequest.updateManyAndReturn({
     *   select: { household_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseholdJoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseholdJoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HouseholdJoinRequest.
     * @param {HouseholdJoinRequestUpsertArgs} args - Arguments to update or create a HouseholdJoinRequest.
     * @example
     * // Update or create a HouseholdJoinRequest
     * const householdJoinRequest = await prisma.householdJoinRequest.upsert({
     *   create: {
     *     // ... data to create a HouseholdJoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HouseholdJoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends HouseholdJoinRequestUpsertArgs>(args: SelectSubset<T, HouseholdJoinRequestUpsertArgs<ExtArgs>>): Prisma__HouseholdJoinRequestClient<$Result.GetResult<Prisma.$HouseholdJoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HouseholdJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdJoinRequestCountArgs} args - Arguments to filter HouseholdJoinRequests to count.
     * @example
     * // Count the number of HouseholdJoinRequests
     * const count = await prisma.householdJoinRequest.count({
     *   where: {
     *     // ... the filter for the HouseholdJoinRequests we want to count
     *   }
     * })
    **/
    count<T extends HouseholdJoinRequestCountArgs>(
      args?: Subset<T, HouseholdJoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseholdJoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HouseholdJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdJoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseholdJoinRequestAggregateArgs>(args: Subset<T, HouseholdJoinRequestAggregateArgs>): Prisma.PrismaPromise<GetHouseholdJoinRequestAggregateType<T>>

    /**
     * Group by HouseholdJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseholdJoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseholdJoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseholdJoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: HouseholdJoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseholdJoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseholdJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HouseholdJoinRequest model
   */
  readonly fields: HouseholdJoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HouseholdJoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseholdJoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HouseholdJoinRequest model
   */
  interface HouseholdJoinRequestFieldRefs {
    readonly household_id: FieldRef<"HouseholdJoinRequest", 'String'>
    readonly requested_by: FieldRef<"HouseholdJoinRequest", 'String'>
    readonly status: FieldRef<"HouseholdJoinRequest", 'JoinRequestStatus'>
    readonly created_at: FieldRef<"HouseholdJoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HouseholdJoinRequest findUnique
   */
  export type HouseholdJoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdJoinRequest to fetch.
     */
    where: HouseholdJoinRequestWhereUniqueInput
  }

  /**
   * HouseholdJoinRequest findUniqueOrThrow
   */
  export type HouseholdJoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdJoinRequest to fetch.
     */
    where: HouseholdJoinRequestWhereUniqueInput
  }

  /**
   * HouseholdJoinRequest findFirst
   */
  export type HouseholdJoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdJoinRequest to fetch.
     */
    where?: HouseholdJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdJoinRequests to fetch.
     */
    orderBy?: HouseholdJoinRequestOrderByWithRelationInput | HouseholdJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseholdJoinRequests.
     */
    cursor?: HouseholdJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseholdJoinRequests.
     */
    distinct?: HouseholdJoinRequestScalarFieldEnum | HouseholdJoinRequestScalarFieldEnum[]
  }

  /**
   * HouseholdJoinRequest findFirstOrThrow
   */
  export type HouseholdJoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdJoinRequest to fetch.
     */
    where?: HouseholdJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdJoinRequests to fetch.
     */
    orderBy?: HouseholdJoinRequestOrderByWithRelationInput | HouseholdJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseholdJoinRequests.
     */
    cursor?: HouseholdJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseholdJoinRequests.
     */
    distinct?: HouseholdJoinRequestScalarFieldEnum | HouseholdJoinRequestScalarFieldEnum[]
  }

  /**
   * HouseholdJoinRequest findMany
   */
  export type HouseholdJoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which HouseholdJoinRequests to fetch.
     */
    where?: HouseholdJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseholdJoinRequests to fetch.
     */
    orderBy?: HouseholdJoinRequestOrderByWithRelationInput | HouseholdJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HouseholdJoinRequests.
     */
    cursor?: HouseholdJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseholdJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseholdJoinRequests.
     */
    skip?: number
    distinct?: HouseholdJoinRequestScalarFieldEnum | HouseholdJoinRequestScalarFieldEnum[]
  }

  /**
   * HouseholdJoinRequest create
   */
  export type HouseholdJoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a HouseholdJoinRequest.
     */
    data: XOR<HouseholdJoinRequestCreateInput, HouseholdJoinRequestUncheckedCreateInput>
  }

  /**
   * HouseholdJoinRequest createMany
   */
  export type HouseholdJoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HouseholdJoinRequests.
     */
    data: HouseholdJoinRequestCreateManyInput | HouseholdJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HouseholdJoinRequest createManyAndReturn
   */
  export type HouseholdJoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many HouseholdJoinRequests.
     */
    data: HouseholdJoinRequestCreateManyInput | HouseholdJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HouseholdJoinRequest update
   */
  export type HouseholdJoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a HouseholdJoinRequest.
     */
    data: XOR<HouseholdJoinRequestUpdateInput, HouseholdJoinRequestUncheckedUpdateInput>
    /**
     * Choose, which HouseholdJoinRequest to update.
     */
    where: HouseholdJoinRequestWhereUniqueInput
  }

  /**
   * HouseholdJoinRequest updateMany
   */
  export type HouseholdJoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HouseholdJoinRequests.
     */
    data: XOR<HouseholdJoinRequestUpdateManyMutationInput, HouseholdJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which HouseholdJoinRequests to update
     */
    where?: HouseholdJoinRequestWhereInput
    /**
     * Limit how many HouseholdJoinRequests to update.
     */
    limit?: number
  }

  /**
   * HouseholdJoinRequest updateManyAndReturn
   */
  export type HouseholdJoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update HouseholdJoinRequests.
     */
    data: XOR<HouseholdJoinRequestUpdateManyMutationInput, HouseholdJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which HouseholdJoinRequests to update
     */
    where?: HouseholdJoinRequestWhereInput
    /**
     * Limit how many HouseholdJoinRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HouseholdJoinRequest upsert
   */
  export type HouseholdJoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the HouseholdJoinRequest to update in case it exists.
     */
    where: HouseholdJoinRequestWhereUniqueInput
    /**
     * In case the HouseholdJoinRequest found by the `where` argument doesn't exist, create a new HouseholdJoinRequest with this data.
     */
    create: XOR<HouseholdJoinRequestCreateInput, HouseholdJoinRequestUncheckedCreateInput>
    /**
     * In case the HouseholdJoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseholdJoinRequestUpdateInput, HouseholdJoinRequestUncheckedUpdateInput>
  }

  /**
   * HouseholdJoinRequest delete
   */
  export type HouseholdJoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
    /**
     * Filter which HouseholdJoinRequest to delete.
     */
    where: HouseholdJoinRequestWhereUniqueInput
  }

  /**
   * HouseholdJoinRequest deleteMany
   */
  export type HouseholdJoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseholdJoinRequests to delete
     */
    where?: HouseholdJoinRequestWhereInput
    /**
     * Limit how many HouseholdJoinRequests to delete.
     */
    limit?: number
  }

  /**
   * HouseholdJoinRequest without action
   */
  export type HouseholdJoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseholdJoinRequest
     */
    select?: HouseholdJoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseholdJoinRequest
     */
    omit?: HouseholdJoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseholdJoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: string | null
    household_id: string | null
    name: string | null
    description: string | null
    icon: string | null
    color: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: string | null
    household_id: string | null
    name: string | null
    description: string | null
    icon: string | null
    color: string | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    household_id: number
    name: number
    description: number
    icon: number
    color: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    category_id?: true
    household_id?: true
    name?: true
    description?: true
    icon?: true
    color?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    household_id?: true
    name?: true
    description?: true
    icon?: true
    color?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    household_id?: true
    name?: true
    description?: true
    icon?: true
    color?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: string
    household_id: string
    name: string
    description: string | null
    icon: string | null
    color: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    household_id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    items?: boolean | Category$itemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    household_id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    household_id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    category_id?: boolean
    household_id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "household_id" | "name" | "description" | "icon" | "color", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
    items?: boolean | Category$itemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    household?: boolean | HouseholdDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      household: Prisma.$HouseholdPayload<ExtArgs>
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: string
      household_id: string
      name: string
      description: string | null
      icon: string | null
      color: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    household<T extends HouseholdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseholdDefaultArgs<ExtArgs>>): Prisma__HouseholdClient<$Result.GetResult<Prisma.$HouseholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Category$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly category_id: FieldRef<"Category", 'String'>
    readonly household_id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.items
   */
  export type Category$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemMinAggregateOutputType = {
    item_id: string | null
    name: string | null
    category_id: string | null
    icon: string | null
    item_type: $Enums.ItemType | null
    notes: string | null
    purchase_link: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
  }

  export type ItemMaxAggregateOutputType = {
    item_id: string | null
    name: string | null
    category_id: string | null
    icon: string | null
    item_type: $Enums.ItemType | null
    notes: string | null
    purchase_link: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
  }

  export type ItemCountAggregateOutputType = {
    item_id: number
    name: number
    category_id: number
    icon: number
    item_type: number
    notes: number
    purchase_link: number
    created_at: number
    updated_at: number
    created_by: number
    _all: number
  }


  export type ItemMinAggregateInputType = {
    item_id?: true
    name?: true
    category_id?: true
    icon?: true
    item_type?: true
    notes?: true
    purchase_link?: true
    created_at?: true
    updated_at?: true
    created_by?: true
  }

  export type ItemMaxAggregateInputType = {
    item_id?: true
    name?: true
    category_id?: true
    icon?: true
    item_type?: true
    notes?: true
    purchase_link?: true
    created_at?: true
    updated_at?: true
    created_by?: true
  }

  export type ItemCountAggregateInputType = {
    item_id?: true
    name?: true
    category_id?: true
    icon?: true
    item_type?: true
    notes?: true
    purchase_link?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    item_id: string
    name: string
    category_id: string
    icon: string | null
    item_type: $Enums.ItemType
    notes: string | null
    purchase_link: string | null
    created_at: Date
    updated_at: Date
    created_by: string
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    name?: boolean
    category_id?: boolean
    icon?: boolean
    item_type?: boolean
    notes?: boolean
    purchase_link?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | Item$scheduleArgs<ExtArgs>
    histories?: boolean | Item$historiesArgs<ExtArgs>
    reminders?: boolean | Item$remindersArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    name?: boolean
    category_id?: boolean
    icon?: boolean
    item_type?: boolean
    notes?: boolean
    purchase_link?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    name?: boolean
    category_id?: boolean
    icon?: boolean
    item_type?: boolean
    notes?: boolean
    purchase_link?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    item_id?: boolean
    name?: boolean
    category_id?: boolean
    icon?: boolean
    item_type?: boolean
    notes?: boolean
    purchase_link?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "name" | "category_id" | "icon" | "item_type" | "notes" | "purchase_link" | "created_at" | "updated_at" | "created_by", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | Item$scheduleArgs<ExtArgs>
    histories?: boolean | Item$historiesArgs<ExtArgs>
    reminders?: boolean | Item$remindersArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      schedule: Prisma.$ItemSchedulePayload<ExtArgs> | null
      histories: Prisma.$ItemHistoryPayload<ExtArgs>[]
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      item_id: string
      name: string
      category_id: string
      icon: string | null
      item_type: $Enums.ItemType
      notes: string | null
      purchase_link: string | null
      created_at: Date
      updated_at: Date
      created_by: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const itemWithItem_idOnly = await prisma.item.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `item_id`
     * const itemWithItem_idOnly = await prisma.item.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `item_id`
     * const itemWithItem_idOnly = await prisma.item.updateManyAndReturn({
     *   select: { item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends Item$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Item$scheduleArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    histories<T extends Item$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Item$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reminders<T extends Item$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Item$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly item_id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly category_id: FieldRef<"Item", 'String'>
    readonly icon: FieldRef<"Item", 'String'>
    readonly item_type: FieldRef<"Item", 'ItemType'>
    readonly notes: FieldRef<"Item", 'String'>
    readonly purchase_link: FieldRef<"Item", 'String'>
    readonly created_at: FieldRef<"Item", 'DateTime'>
    readonly updated_at: FieldRef<"Item", 'DateTime'>
    readonly created_by: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.schedule
   */
  export type Item$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    where?: ItemScheduleWhereInput
  }

  /**
   * Item.histories
   */
  export type Item$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    where?: ItemHistoryWhereInput
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    cursor?: ItemHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }

  /**
   * Item.reminders
   */
  export type Item$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemSchedule
   */

  export type AggregateItemSchedule = {
    _count: ItemScheduleCountAggregateOutputType | null
    _avg: ItemScheduleAvgAggregateOutputType | null
    _sum: ItemScheduleSumAggregateOutputType | null
    _min: ItemScheduleMinAggregateOutputType | null
    _max: ItemScheduleMaxAggregateOutputType | null
  }

  export type ItemScheduleAvgAggregateOutputType = {
    interval_days: number | null
    lead_time_days: number | null
  }

  export type ItemScheduleSumAggregateOutputType = {
    interval_days: number | null
    lead_time_days: number | null
  }

  export type ItemScheduleMinAggregateOutputType = {
    item_id: string | null
    tracking_mode: $Enums.TrackingMode | null
    interval_days: number | null
    fixed_due_date: Date | null
    recurrence_rule: string | null
    lead_time_days: number | null
    last_completed_at: Date | null
    next_due_date: Date | null
    updated_at: Date | null
  }

  export type ItemScheduleMaxAggregateOutputType = {
    item_id: string | null
    tracking_mode: $Enums.TrackingMode | null
    interval_days: number | null
    fixed_due_date: Date | null
    recurrence_rule: string | null
    lead_time_days: number | null
    last_completed_at: Date | null
    next_due_date: Date | null
    updated_at: Date | null
  }

  export type ItemScheduleCountAggregateOutputType = {
    item_id: number
    tracking_mode: number
    interval_days: number
    fixed_due_date: number
    recurrence_rule: number
    lead_time_days: number
    last_completed_at: number
    next_due_date: number
    updated_at: number
    _all: number
  }


  export type ItemScheduleAvgAggregateInputType = {
    interval_days?: true
    lead_time_days?: true
  }

  export type ItemScheduleSumAggregateInputType = {
    interval_days?: true
    lead_time_days?: true
  }

  export type ItemScheduleMinAggregateInputType = {
    item_id?: true
    tracking_mode?: true
    interval_days?: true
    fixed_due_date?: true
    recurrence_rule?: true
    lead_time_days?: true
    last_completed_at?: true
    next_due_date?: true
    updated_at?: true
  }

  export type ItemScheduleMaxAggregateInputType = {
    item_id?: true
    tracking_mode?: true
    interval_days?: true
    fixed_due_date?: true
    recurrence_rule?: true
    lead_time_days?: true
    last_completed_at?: true
    next_due_date?: true
    updated_at?: true
  }

  export type ItemScheduleCountAggregateInputType = {
    item_id?: true
    tracking_mode?: true
    interval_days?: true
    fixed_due_date?: true
    recurrence_rule?: true
    lead_time_days?: true
    last_completed_at?: true
    next_due_date?: true
    updated_at?: true
    _all?: true
  }

  export type ItemScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSchedule to aggregate.
     */
    where?: ItemScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSchedules to fetch.
     */
    orderBy?: ItemScheduleOrderByWithRelationInput | ItemScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemSchedules
    **/
    _count?: true | ItemScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemScheduleMaxAggregateInputType
  }

  export type GetItemScheduleAggregateType<T extends ItemScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateItemSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemSchedule[P]>
      : GetScalarType<T[P], AggregateItemSchedule[P]>
  }




  export type ItemScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemScheduleWhereInput
    orderBy?: ItemScheduleOrderByWithAggregationInput | ItemScheduleOrderByWithAggregationInput[]
    by: ItemScheduleScalarFieldEnum[] | ItemScheduleScalarFieldEnum
    having?: ItemScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemScheduleCountAggregateInputType | true
    _avg?: ItemScheduleAvgAggregateInputType
    _sum?: ItemScheduleSumAggregateInputType
    _min?: ItemScheduleMinAggregateInputType
    _max?: ItemScheduleMaxAggregateInputType
  }

  export type ItemScheduleGroupByOutputType = {
    item_id: string
    tracking_mode: $Enums.TrackingMode
    interval_days: number | null
    fixed_due_date: Date | null
    recurrence_rule: string | null
    lead_time_days: number | null
    last_completed_at: Date | null
    next_due_date: Date
    updated_at: Date
    _count: ItemScheduleCountAggregateOutputType | null
    _avg: ItemScheduleAvgAggregateOutputType | null
    _sum: ItemScheduleSumAggregateOutputType | null
    _min: ItemScheduleMinAggregateOutputType | null
    _max: ItemScheduleMaxAggregateOutputType | null
  }

  type GetItemScheduleGroupByPayload<T extends ItemScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ItemScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ItemScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    tracking_mode?: boolean
    interval_days?: boolean
    fixed_due_date?: boolean
    recurrence_rule?: boolean
    lead_time_days?: boolean
    last_completed_at?: boolean
    next_due_date?: boolean
    updated_at?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSchedule"]>

  export type ItemScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    tracking_mode?: boolean
    interval_days?: boolean
    fixed_due_date?: boolean
    recurrence_rule?: boolean
    lead_time_days?: boolean
    last_completed_at?: boolean
    next_due_date?: boolean
    updated_at?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSchedule"]>

  export type ItemScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    tracking_mode?: boolean
    interval_days?: boolean
    fixed_due_date?: boolean
    recurrence_rule?: boolean
    lead_time_days?: boolean
    last_completed_at?: boolean
    next_due_date?: boolean
    updated_at?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemSchedule"]>

  export type ItemScheduleSelectScalar = {
    item_id?: boolean
    tracking_mode?: boolean
    interval_days?: boolean
    fixed_due_date?: boolean
    recurrence_rule?: boolean
    lead_time_days?: boolean
    last_completed_at?: boolean
    next_due_date?: boolean
    updated_at?: boolean
  }

  export type ItemScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "tracking_mode" | "interval_days" | "fixed_due_date" | "recurrence_rule" | "lead_time_days" | "last_completed_at" | "next_due_date" | "updated_at", ExtArgs["result"]["itemSchedule"]>
  export type ItemScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type ItemScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemSchedule"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      item_id: string
      tracking_mode: $Enums.TrackingMode
      interval_days: number | null
      fixed_due_date: Date | null
      recurrence_rule: string | null
      lead_time_days: number | null
      last_completed_at: Date | null
      next_due_date: Date
      updated_at: Date
    }, ExtArgs["result"]["itemSchedule"]>
    composites: {}
  }

  type ItemScheduleGetPayload<S extends boolean | null | undefined | ItemScheduleDefaultArgs> = $Result.GetResult<Prisma.$ItemSchedulePayload, S>

  type ItemScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemScheduleCountAggregateInputType | true
    }

  export interface ItemScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemSchedule'], meta: { name: 'ItemSchedule' } }
    /**
     * Find zero or one ItemSchedule that matches the filter.
     * @param {ItemScheduleFindUniqueArgs} args - Arguments to find a ItemSchedule
     * @example
     * // Get one ItemSchedule
     * const itemSchedule = await prisma.itemSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemScheduleFindUniqueArgs>(args: SelectSubset<T, ItemScheduleFindUniqueArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemScheduleFindUniqueOrThrowArgs} args - Arguments to find a ItemSchedule
     * @example
     * // Get one ItemSchedule
     * const itemSchedule = await prisma.itemSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemScheduleFindFirstArgs} args - Arguments to find a ItemSchedule
     * @example
     * // Get one ItemSchedule
     * const itemSchedule = await prisma.itemSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemScheduleFindFirstArgs>(args?: SelectSubset<T, ItemScheduleFindFirstArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemScheduleFindFirstOrThrowArgs} args - Arguments to find a ItemSchedule
     * @example
     * // Get one ItemSchedule
     * const itemSchedule = await prisma.itemSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemSchedules
     * const itemSchedules = await prisma.itemSchedule.findMany()
     * 
     * // Get first 10 ItemSchedules
     * const itemSchedules = await prisma.itemSchedule.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const itemScheduleWithItem_idOnly = await prisma.itemSchedule.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends ItemScheduleFindManyArgs>(args?: SelectSubset<T, ItemScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemSchedule.
     * @param {ItemScheduleCreateArgs} args - Arguments to create a ItemSchedule.
     * @example
     * // Create one ItemSchedule
     * const ItemSchedule = await prisma.itemSchedule.create({
     *   data: {
     *     // ... data to create a ItemSchedule
     *   }
     * })
     * 
     */
    create<T extends ItemScheduleCreateArgs>(args: SelectSubset<T, ItemScheduleCreateArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemSchedules.
     * @param {ItemScheduleCreateManyArgs} args - Arguments to create many ItemSchedules.
     * @example
     * // Create many ItemSchedules
     * const itemSchedule = await prisma.itemSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemScheduleCreateManyArgs>(args?: SelectSubset<T, ItemScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemSchedules and returns the data saved in the database.
     * @param {ItemScheduleCreateManyAndReturnArgs} args - Arguments to create many ItemSchedules.
     * @example
     * // Create many ItemSchedules
     * const itemSchedule = await prisma.itemSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemSchedules and only return the `item_id`
     * const itemScheduleWithItem_idOnly = await prisma.itemSchedule.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemSchedule.
     * @param {ItemScheduleDeleteArgs} args - Arguments to delete one ItemSchedule.
     * @example
     * // Delete one ItemSchedule
     * const ItemSchedule = await prisma.itemSchedule.delete({
     *   where: {
     *     // ... filter to delete one ItemSchedule
     *   }
     * })
     * 
     */
    delete<T extends ItemScheduleDeleteArgs>(args: SelectSubset<T, ItemScheduleDeleteArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemSchedule.
     * @param {ItemScheduleUpdateArgs} args - Arguments to update one ItemSchedule.
     * @example
     * // Update one ItemSchedule
     * const itemSchedule = await prisma.itemSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemScheduleUpdateArgs>(args: SelectSubset<T, ItemScheduleUpdateArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemSchedules.
     * @param {ItemScheduleDeleteManyArgs} args - Arguments to filter ItemSchedules to delete.
     * @example
     * // Delete a few ItemSchedules
     * const { count } = await prisma.itemSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemScheduleDeleteManyArgs>(args?: SelectSubset<T, ItemScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemSchedules
     * const itemSchedule = await prisma.itemSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemScheduleUpdateManyArgs>(args: SelectSubset<T, ItemScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemSchedules and returns the data updated in the database.
     * @param {ItemScheduleUpdateManyAndReturnArgs} args - Arguments to update many ItemSchedules.
     * @example
     * // Update many ItemSchedules
     * const itemSchedule = await prisma.itemSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemSchedules and only return the `item_id`
     * const itemScheduleWithItem_idOnly = await prisma.itemSchedule.updateManyAndReturn({
     *   select: { item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemSchedule.
     * @param {ItemScheduleUpsertArgs} args - Arguments to update or create a ItemSchedule.
     * @example
     * // Update or create a ItemSchedule
     * const itemSchedule = await prisma.itemSchedule.upsert({
     *   create: {
     *     // ... data to create a ItemSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemSchedule we want to update
     *   }
     * })
     */
    upsert<T extends ItemScheduleUpsertArgs>(args: SelectSubset<T, ItemScheduleUpsertArgs<ExtArgs>>): Prisma__ItemScheduleClient<$Result.GetResult<Prisma.$ItemSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemScheduleCountArgs} args - Arguments to filter ItemSchedules to count.
     * @example
     * // Count the number of ItemSchedules
     * const count = await prisma.itemSchedule.count({
     *   where: {
     *     // ... the filter for the ItemSchedules we want to count
     *   }
     * })
    **/
    count<T extends ItemScheduleCountArgs>(
      args?: Subset<T, ItemScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemScheduleAggregateArgs>(args: Subset<T, ItemScheduleAggregateArgs>): Prisma.PrismaPromise<GetItemScheduleAggregateType<T>>

    /**
     * Group by ItemSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ItemScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemSchedule model
   */
  readonly fields: ItemScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemSchedule model
   */
  interface ItemScheduleFieldRefs {
    readonly item_id: FieldRef<"ItemSchedule", 'String'>
    readonly tracking_mode: FieldRef<"ItemSchedule", 'TrackingMode'>
    readonly interval_days: FieldRef<"ItemSchedule", 'Int'>
    readonly fixed_due_date: FieldRef<"ItemSchedule", 'DateTime'>
    readonly recurrence_rule: FieldRef<"ItemSchedule", 'String'>
    readonly lead_time_days: FieldRef<"ItemSchedule", 'Int'>
    readonly last_completed_at: FieldRef<"ItemSchedule", 'DateTime'>
    readonly next_due_date: FieldRef<"ItemSchedule", 'DateTime'>
    readonly updated_at: FieldRef<"ItemSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemSchedule findUnique
   */
  export type ItemScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ItemSchedule to fetch.
     */
    where: ItemScheduleWhereUniqueInput
  }

  /**
   * ItemSchedule findUniqueOrThrow
   */
  export type ItemScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ItemSchedule to fetch.
     */
    where: ItemScheduleWhereUniqueInput
  }

  /**
   * ItemSchedule findFirst
   */
  export type ItemScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ItemSchedule to fetch.
     */
    where?: ItemScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSchedules to fetch.
     */
    orderBy?: ItemScheduleOrderByWithRelationInput | ItemScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSchedules.
     */
    cursor?: ItemScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSchedules.
     */
    distinct?: ItemScheduleScalarFieldEnum | ItemScheduleScalarFieldEnum[]
  }

  /**
   * ItemSchedule findFirstOrThrow
   */
  export type ItemScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ItemSchedule to fetch.
     */
    where?: ItemScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSchedules to fetch.
     */
    orderBy?: ItemScheduleOrderByWithRelationInput | ItemScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemSchedules.
     */
    cursor?: ItemScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemSchedules.
     */
    distinct?: ItemScheduleScalarFieldEnum | ItemScheduleScalarFieldEnum[]
  }

  /**
   * ItemSchedule findMany
   */
  export type ItemScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ItemSchedules to fetch.
     */
    where?: ItemScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemSchedules to fetch.
     */
    orderBy?: ItemScheduleOrderByWithRelationInput | ItemScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemSchedules.
     */
    cursor?: ItemScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemSchedules.
     */
    skip?: number
    distinct?: ItemScheduleScalarFieldEnum | ItemScheduleScalarFieldEnum[]
  }

  /**
   * ItemSchedule create
   */
  export type ItemScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemSchedule.
     */
    data: XOR<ItemScheduleCreateInput, ItemScheduleUncheckedCreateInput>
  }

  /**
   * ItemSchedule createMany
   */
  export type ItemScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemSchedules.
     */
    data: ItemScheduleCreateManyInput | ItemScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemSchedule createManyAndReturn
   */
  export type ItemScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many ItemSchedules.
     */
    data: ItemScheduleCreateManyInput | ItemScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemSchedule update
   */
  export type ItemScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemSchedule.
     */
    data: XOR<ItemScheduleUpdateInput, ItemScheduleUncheckedUpdateInput>
    /**
     * Choose, which ItemSchedule to update.
     */
    where: ItemScheduleWhereUniqueInput
  }

  /**
   * ItemSchedule updateMany
   */
  export type ItemScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemSchedules.
     */
    data: XOR<ItemScheduleUpdateManyMutationInput, ItemScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ItemSchedules to update
     */
    where?: ItemScheduleWhereInput
    /**
     * Limit how many ItemSchedules to update.
     */
    limit?: number
  }

  /**
   * ItemSchedule updateManyAndReturn
   */
  export type ItemScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * The data used to update ItemSchedules.
     */
    data: XOR<ItemScheduleUpdateManyMutationInput, ItemScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ItemSchedules to update
     */
    where?: ItemScheduleWhereInput
    /**
     * Limit how many ItemSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemSchedule upsert
   */
  export type ItemScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemSchedule to update in case it exists.
     */
    where: ItemScheduleWhereUniqueInput
    /**
     * In case the ItemSchedule found by the `where` argument doesn't exist, create a new ItemSchedule with this data.
     */
    create: XOR<ItemScheduleCreateInput, ItemScheduleUncheckedCreateInput>
    /**
     * In case the ItemSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemScheduleUpdateInput, ItemScheduleUncheckedUpdateInput>
  }

  /**
   * ItemSchedule delete
   */
  export type ItemScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
    /**
     * Filter which ItemSchedule to delete.
     */
    where: ItemScheduleWhereUniqueInput
  }

  /**
   * ItemSchedule deleteMany
   */
  export type ItemScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemSchedules to delete
     */
    where?: ItemScheduleWhereInput
    /**
     * Limit how many ItemSchedules to delete.
     */
    limit?: number
  }

  /**
   * ItemSchedule without action
   */
  export type ItemScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemSchedule
     */
    select?: ItemScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemSchedule
     */
    omit?: ItemScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemScheduleInclude<ExtArgs> | null
  }


  /**
   * Model ItemHistory
   */

  export type AggregateItemHistory = {
    _count: ItemHistoryCountAggregateOutputType | null
    _min: ItemHistoryMinAggregateOutputType | null
    _max: ItemHistoryMaxAggregateOutputType | null
  }

  export type ItemHistoryMinAggregateOutputType = {
    history_id: string | null
    item_id: string | null
    completed_at: Date | null
    completed_by: string | null
    notes: string | null
  }

  export type ItemHistoryMaxAggregateOutputType = {
    history_id: string | null
    item_id: string | null
    completed_at: Date | null
    completed_by: string | null
    notes: string | null
  }

  export type ItemHistoryCountAggregateOutputType = {
    history_id: number
    item_id: number
    completed_at: number
    completed_by: number
    notes: number
    _all: number
  }


  export type ItemHistoryMinAggregateInputType = {
    history_id?: true
    item_id?: true
    completed_at?: true
    completed_by?: true
    notes?: true
  }

  export type ItemHistoryMaxAggregateInputType = {
    history_id?: true
    item_id?: true
    completed_at?: true
    completed_by?: true
    notes?: true
  }

  export type ItemHistoryCountAggregateInputType = {
    history_id?: true
    item_id?: true
    completed_at?: true
    completed_by?: true
    notes?: true
    _all?: true
  }

  export type ItemHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemHistory to aggregate.
     */
    where?: ItemHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemHistories to fetch.
     */
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemHistories
    **/
    _count?: true | ItemHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemHistoryMaxAggregateInputType
  }

  export type GetItemHistoryAggregateType<T extends ItemHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateItemHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemHistory[P]>
      : GetScalarType<T[P], AggregateItemHistory[P]>
  }




  export type ItemHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemHistoryWhereInput
    orderBy?: ItemHistoryOrderByWithAggregationInput | ItemHistoryOrderByWithAggregationInput[]
    by: ItemHistoryScalarFieldEnum[] | ItemHistoryScalarFieldEnum
    having?: ItemHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemHistoryCountAggregateInputType | true
    _min?: ItemHistoryMinAggregateInputType
    _max?: ItemHistoryMaxAggregateInputType
  }

  export type ItemHistoryGroupByOutputType = {
    history_id: string
    item_id: string
    completed_at: Date
    completed_by: string
    notes: string | null
    _count: ItemHistoryCountAggregateOutputType | null
    _min: ItemHistoryMinAggregateOutputType | null
    _max: ItemHistoryMaxAggregateOutputType | null
  }

  type GetItemHistoryGroupByPayload<T extends ItemHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ItemHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ItemHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    item_id?: boolean
    completed_at?: boolean
    completed_by?: boolean
    notes?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    completer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemHistory"]>

  export type ItemHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    item_id?: boolean
    completed_at?: boolean
    completed_by?: boolean
    notes?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    completer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemHistory"]>

  export type ItemHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    item_id?: boolean
    completed_at?: boolean
    completed_by?: boolean
    notes?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    completer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemHistory"]>

  export type ItemHistorySelectScalar = {
    history_id?: boolean
    item_id?: boolean
    completed_at?: boolean
    completed_by?: boolean
    notes?: boolean
  }

  export type ItemHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"history_id" | "item_id" | "completed_at" | "completed_by" | "notes", ExtArgs["result"]["itemHistory"]>
  export type ItemHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    completer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    completer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    completer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ItemHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemHistory"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      completer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      history_id: string
      item_id: string
      completed_at: Date
      completed_by: string
      notes: string | null
    }, ExtArgs["result"]["itemHistory"]>
    composites: {}
  }

  type ItemHistoryGetPayload<S extends boolean | null | undefined | ItemHistoryDefaultArgs> = $Result.GetResult<Prisma.$ItemHistoryPayload, S>

  type ItemHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemHistoryCountAggregateInputType | true
    }

  export interface ItemHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemHistory'], meta: { name: 'ItemHistory' } }
    /**
     * Find zero or one ItemHistory that matches the filter.
     * @param {ItemHistoryFindUniqueArgs} args - Arguments to find a ItemHistory
     * @example
     * // Get one ItemHistory
     * const itemHistory = await prisma.itemHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemHistoryFindUniqueArgs>(args: SelectSubset<T, ItemHistoryFindUniqueArgs<ExtArgs>>): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemHistoryFindUniqueOrThrowArgs} args - Arguments to find a ItemHistory
     * @example
     * // Get one ItemHistory
     * const itemHistory = await prisma.itemHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryFindFirstArgs} args - Arguments to find a ItemHistory
     * @example
     * // Get one ItemHistory
     * const itemHistory = await prisma.itemHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemHistoryFindFirstArgs>(args?: SelectSubset<T, ItemHistoryFindFirstArgs<ExtArgs>>): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryFindFirstOrThrowArgs} args - Arguments to find a ItemHistory
     * @example
     * // Get one ItemHistory
     * const itemHistory = await prisma.itemHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemHistories
     * const itemHistories = await prisma.itemHistory.findMany()
     * 
     * // Get first 10 ItemHistories
     * const itemHistories = await prisma.itemHistory.findMany({ take: 10 })
     * 
     * // Only select the `history_id`
     * const itemHistoryWithHistory_idOnly = await prisma.itemHistory.findMany({ select: { history_id: true } })
     * 
     */
    findMany<T extends ItemHistoryFindManyArgs>(args?: SelectSubset<T, ItemHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemHistory.
     * @param {ItemHistoryCreateArgs} args - Arguments to create a ItemHistory.
     * @example
     * // Create one ItemHistory
     * const ItemHistory = await prisma.itemHistory.create({
     *   data: {
     *     // ... data to create a ItemHistory
     *   }
     * })
     * 
     */
    create<T extends ItemHistoryCreateArgs>(args: SelectSubset<T, ItemHistoryCreateArgs<ExtArgs>>): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemHistories.
     * @param {ItemHistoryCreateManyArgs} args - Arguments to create many ItemHistories.
     * @example
     * // Create many ItemHistories
     * const itemHistory = await prisma.itemHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemHistoryCreateManyArgs>(args?: SelectSubset<T, ItemHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemHistories and returns the data saved in the database.
     * @param {ItemHistoryCreateManyAndReturnArgs} args - Arguments to create many ItemHistories.
     * @example
     * // Create many ItemHistories
     * const itemHistory = await prisma.itemHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemHistories and only return the `history_id`
     * const itemHistoryWithHistory_idOnly = await prisma.itemHistory.createManyAndReturn({
     *   select: { history_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemHistory.
     * @param {ItemHistoryDeleteArgs} args - Arguments to delete one ItemHistory.
     * @example
     * // Delete one ItemHistory
     * const ItemHistory = await prisma.itemHistory.delete({
     *   where: {
     *     // ... filter to delete one ItemHistory
     *   }
     * })
     * 
     */
    delete<T extends ItemHistoryDeleteArgs>(args: SelectSubset<T, ItemHistoryDeleteArgs<ExtArgs>>): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemHistory.
     * @param {ItemHistoryUpdateArgs} args - Arguments to update one ItemHistory.
     * @example
     * // Update one ItemHistory
     * const itemHistory = await prisma.itemHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemHistoryUpdateArgs>(args: SelectSubset<T, ItemHistoryUpdateArgs<ExtArgs>>): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemHistories.
     * @param {ItemHistoryDeleteManyArgs} args - Arguments to filter ItemHistories to delete.
     * @example
     * // Delete a few ItemHistories
     * const { count } = await prisma.itemHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemHistoryDeleteManyArgs>(args?: SelectSubset<T, ItemHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemHistories
     * const itemHistory = await prisma.itemHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemHistoryUpdateManyArgs>(args: SelectSubset<T, ItemHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemHistories and returns the data updated in the database.
     * @param {ItemHistoryUpdateManyAndReturnArgs} args - Arguments to update many ItemHistories.
     * @example
     * // Update many ItemHistories
     * const itemHistory = await prisma.itemHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemHistories and only return the `history_id`
     * const itemHistoryWithHistory_idOnly = await prisma.itemHistory.updateManyAndReturn({
     *   select: { history_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemHistory.
     * @param {ItemHistoryUpsertArgs} args - Arguments to update or create a ItemHistory.
     * @example
     * // Update or create a ItemHistory
     * const itemHistory = await prisma.itemHistory.upsert({
     *   create: {
     *     // ... data to create a ItemHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemHistory we want to update
     *   }
     * })
     */
    upsert<T extends ItemHistoryUpsertArgs>(args: SelectSubset<T, ItemHistoryUpsertArgs<ExtArgs>>): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryCountArgs} args - Arguments to filter ItemHistories to count.
     * @example
     * // Count the number of ItemHistories
     * const count = await prisma.itemHistory.count({
     *   where: {
     *     // ... the filter for the ItemHistories we want to count
     *   }
     * })
    **/
    count<T extends ItemHistoryCountArgs>(
      args?: Subset<T, ItemHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemHistoryAggregateArgs>(args: Subset<T, ItemHistoryAggregateArgs>): Prisma.PrismaPromise<GetItemHistoryAggregateType<T>>

    /**
     * Group by ItemHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ItemHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemHistory model
   */
  readonly fields: ItemHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemHistory model
   */
  interface ItemHistoryFieldRefs {
    readonly history_id: FieldRef<"ItemHistory", 'String'>
    readonly item_id: FieldRef<"ItemHistory", 'String'>
    readonly completed_at: FieldRef<"ItemHistory", 'DateTime'>
    readonly completed_by: FieldRef<"ItemHistory", 'String'>
    readonly notes: FieldRef<"ItemHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemHistory findUnique
   */
  export type ItemHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistory to fetch.
     */
    where: ItemHistoryWhereUniqueInput
  }

  /**
   * ItemHistory findUniqueOrThrow
   */
  export type ItemHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistory to fetch.
     */
    where: ItemHistoryWhereUniqueInput
  }

  /**
   * ItemHistory findFirst
   */
  export type ItemHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistory to fetch.
     */
    where?: ItemHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemHistories to fetch.
     */
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemHistories.
     */
    cursor?: ItemHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemHistories.
     */
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }

  /**
   * ItemHistory findFirstOrThrow
   */
  export type ItemHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistory to fetch.
     */
    where?: ItemHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemHistories to fetch.
     */
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemHistories.
     */
    cursor?: ItemHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemHistories.
     */
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }

  /**
   * ItemHistory findMany
   */
  export type ItemHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistories to fetch.
     */
    where?: ItemHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemHistories to fetch.
     */
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemHistories.
     */
    cursor?: ItemHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemHistories.
     */
    skip?: number
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }

  /**
   * ItemHistory create
   */
  export type ItemHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemHistory.
     */
    data: XOR<ItemHistoryCreateInput, ItemHistoryUncheckedCreateInput>
  }

  /**
   * ItemHistory createMany
   */
  export type ItemHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemHistories.
     */
    data: ItemHistoryCreateManyInput | ItemHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemHistory createManyAndReturn
   */
  export type ItemHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ItemHistories.
     */
    data: ItemHistoryCreateManyInput | ItemHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemHistory update
   */
  export type ItemHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemHistory.
     */
    data: XOR<ItemHistoryUpdateInput, ItemHistoryUncheckedUpdateInput>
    /**
     * Choose, which ItemHistory to update.
     */
    where: ItemHistoryWhereUniqueInput
  }

  /**
   * ItemHistory updateMany
   */
  export type ItemHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemHistories.
     */
    data: XOR<ItemHistoryUpdateManyMutationInput, ItemHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemHistories to update
     */
    where?: ItemHistoryWhereInput
    /**
     * Limit how many ItemHistories to update.
     */
    limit?: number
  }

  /**
   * ItemHistory updateManyAndReturn
   */
  export type ItemHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ItemHistories.
     */
    data: XOR<ItemHistoryUpdateManyMutationInput, ItemHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemHistories to update
     */
    where?: ItemHistoryWhereInput
    /**
     * Limit how many ItemHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemHistory upsert
   */
  export type ItemHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemHistory to update in case it exists.
     */
    where: ItemHistoryWhereUniqueInput
    /**
     * In case the ItemHistory found by the `where` argument doesn't exist, create a new ItemHistory with this data.
     */
    create: XOR<ItemHistoryCreateInput, ItemHistoryUncheckedCreateInput>
    /**
     * In case the ItemHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemHistoryUpdateInput, ItemHistoryUncheckedUpdateInput>
  }

  /**
   * ItemHistory delete
   */
  export type ItemHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter which ItemHistory to delete.
     */
    where: ItemHistoryWhereUniqueInput
  }

  /**
   * ItemHistory deleteMany
   */
  export type ItemHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemHistories to delete
     */
    where?: ItemHistoryWhereInput
    /**
     * Limit how many ItemHistories to delete.
     */
    limit?: number
  }

  /**
   * ItemHistory without action
   */
  export type ItemHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemHistory
     */
    omit?: ItemHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderMinAggregateOutputType = {
    reminder_id: string | null
    item_id: string | null
    user_id: string | null
    remind_at: Date | null
  }

  export type ReminderMaxAggregateOutputType = {
    reminder_id: string | null
    item_id: string | null
    user_id: string | null
    remind_at: Date | null
  }

  export type ReminderCountAggregateOutputType = {
    reminder_id: number
    item_id: number
    user_id: number
    remind_at: number
    _all: number
  }


  export type ReminderMinAggregateInputType = {
    reminder_id?: true
    item_id?: true
    user_id?: true
    remind_at?: true
  }

  export type ReminderMaxAggregateInputType = {
    reminder_id?: true
    item_id?: true
    user_id?: true
    remind_at?: true
  }

  export type ReminderCountAggregateInputType = {
    reminder_id?: true
    item_id?: true
    user_id?: true
    remind_at?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    reminder_id: string
    item_id: string
    user_id: string
    remind_at: Date
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reminder_id?: boolean
    item_id?: boolean
    user_id?: boolean
    remind_at?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reminder_id?: boolean
    item_id?: boolean
    user_id?: boolean
    remind_at?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reminder_id?: boolean
    item_id?: boolean
    user_id?: boolean
    remind_at?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    reminder_id?: boolean
    item_id?: boolean
    user_id?: boolean
    remind_at?: boolean
  }

  export type ReminderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reminder_id" | "item_id" | "user_id" | "remind_at", ExtArgs["result"]["reminder"]>
  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reminder_id: string
      item_id: string
      user_id: string
      remind_at: Date
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `reminder_id`
     * const reminderWithReminder_idOnly = await prisma.reminder.findMany({ select: { reminder_id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `reminder_id`
     * const reminderWithReminder_idOnly = await prisma.reminder.createManyAndReturn({
     *   select: { reminder_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {ReminderUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `reminder_id`
     * const reminderWithReminder_idOnly = await prisma.reminder.updateManyAndReturn({
     *   select: { reminder_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReminderUpdateManyAndReturnArgs>(args: SelectSubset<T, ReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reminder model
   */
  interface ReminderFieldRefs {
    readonly reminder_id: FieldRef<"Reminder", 'String'>
    readonly item_id: FieldRef<"Reminder", 'String'>
    readonly user_id: FieldRef<"Reminder", 'String'>
    readonly remind_at: FieldRef<"Reminder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminder updateManyAndReturn
   */
  export type ReminderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to delete.
     */
    limit?: number
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    email_verified: 'email_verified',
    password_hash: 'password_hash',
    name: 'name',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    token_id: 'token_id',
    user_id: 'user_id',
    token_hash: 'token_hash',
    device_info: 'device_info',
    created_at: 'created_at',
    expires_at: 'expires_at',
    revoked_at: 'revoked_at'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const HouseholdScalarFieldEnum: {
    household_id: 'household_id',
    name: 'name',
    created_by: 'created_by',
    updated_at: 'updated_at'
  };

  export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum]


  export const HouseholdMemberScalarFieldEnum: {
    household_id: 'household_id',
    user_id: 'user_id',
    role: 'role'
  };

  export type HouseholdMemberScalarFieldEnum = (typeof HouseholdMemberScalarFieldEnum)[keyof typeof HouseholdMemberScalarFieldEnum]


  export const HouseholdInvitationScalarFieldEnum: {
    invitation_id: 'invitation_id',
    household_id: 'household_id',
    code: 'code',
    invited_by: 'invited_by',
    email: 'email',
    created_at: 'created_at',
    expires_at: 'expires_at',
    status: 'status'
  };

  export type HouseholdInvitationScalarFieldEnum = (typeof HouseholdInvitationScalarFieldEnum)[keyof typeof HouseholdInvitationScalarFieldEnum]


  export const HouseholdJoinRequestScalarFieldEnum: {
    household_id: 'household_id',
    requested_by: 'requested_by',
    status: 'status',
    created_at: 'created_at'
  };

  export type HouseholdJoinRequestScalarFieldEnum = (typeof HouseholdJoinRequestScalarFieldEnum)[keyof typeof HouseholdJoinRequestScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    household_id: 'household_id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    color: 'color'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    item_id: 'item_id',
    name: 'name',
    category_id: 'category_id',
    icon: 'icon',
    item_type: 'item_type',
    notes: 'notes',
    purchase_link: 'purchase_link',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemScheduleScalarFieldEnum: {
    item_id: 'item_id',
    tracking_mode: 'tracking_mode',
    interval_days: 'interval_days',
    fixed_due_date: 'fixed_due_date',
    recurrence_rule: 'recurrence_rule',
    lead_time_days: 'lead_time_days',
    last_completed_at: 'last_completed_at',
    next_due_date: 'next_due_date',
    updated_at: 'updated_at'
  };

  export type ItemScheduleScalarFieldEnum = (typeof ItemScheduleScalarFieldEnum)[keyof typeof ItemScheduleScalarFieldEnum]


  export const ItemHistoryScalarFieldEnum: {
    history_id: 'history_id',
    item_id: 'item_id',
    completed_at: 'completed_at',
    completed_by: 'completed_by',
    notes: 'notes'
  };

  export type ItemHistoryScalarFieldEnum = (typeof ItemHistoryScalarFieldEnum)[keyof typeof ItemHistoryScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    reminder_id: 'reminder_id',
    item_id: 'item_id',
    user_id: 'user_id',
    remind_at: 'remind_at'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'InvitationStatus'
   */
  export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>
    


  /**
   * Reference to a field of type 'InvitationStatus[]'
   */
  export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>
    


  /**
   * Reference to a field of type 'JoinRequestStatus'
   */
  export type EnumJoinRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JoinRequestStatus'>
    


  /**
   * Reference to a field of type 'JoinRequestStatus[]'
   */
  export type ListEnumJoinRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JoinRequestStatus[]'>
    


  /**
   * Reference to a field of type 'ItemType'
   */
  export type EnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType'>
    


  /**
   * Reference to a field of type 'ItemType[]'
   */
  export type ListEnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType[]'>
    


  /**
   * Reference to a field of type 'TrackingMode'
   */
  export type EnumTrackingModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrackingMode'>
    


  /**
   * Reference to a field of type 'TrackingMode[]'
   */
  export type ListEnumTrackingModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrackingMode[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    email_verified?: BoolFilter<"User"> | boolean
    password_hash?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    createdHouseholds?: HouseholdListRelationFilter
    memberships?: HouseholdMemberListRelationFilter
    invitations?: HouseholdInvitationListRelationFilter
    requests?: HouseholdJoinRequestListRelationFilter
    items?: ItemListRelationFilter
    itemHistories?: ItemHistoryListRelationFilter
    reminders?: ReminderListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    name?: SortOrder
    updated_at?: SortOrder
    createdHouseholds?: HouseholdOrderByRelationAggregateInput
    memberships?: HouseholdMemberOrderByRelationAggregateInput
    invitations?: HouseholdInvitationOrderByRelationAggregateInput
    requests?: HouseholdJoinRequestOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
    itemHistories?: ItemHistoryOrderByRelationAggregateInput
    reminders?: ReminderOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email_verified?: BoolFilter<"User"> | boolean
    password_hash?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    createdHouseholds?: HouseholdListRelationFilter
    memberships?: HouseholdMemberListRelationFilter
    invitations?: HouseholdInvitationListRelationFilter
    requests?: HouseholdJoinRequestListRelationFilter
    items?: ItemListRelationFilter
    itemHistories?: ItemHistoryListRelationFilter
    reminders?: ReminderListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    name?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    email_verified?: BoolWithAggregatesFilter<"User"> | boolean
    password_hash?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    token_id?: StringFilter<"RefreshToken"> | string
    user_id?: StringFilter<"RefreshToken"> | string
    token_hash?: StringFilter<"RefreshToken"> | string
    device_info?: StringNullableFilter<"RefreshToken"> | string | null
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked_at?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    token_id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    device_info?: SortOrderInput | SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    token_id?: string
    token_hash?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    user_id?: StringFilter<"RefreshToken"> | string
    device_info?: StringNullableFilter<"RefreshToken"> | string | null
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked_at?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "token_id" | "token_hash">

  export type RefreshTokenOrderByWithAggregationInput = {
    token_id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    device_info?: SortOrderInput | SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    token_id?: StringWithAggregatesFilter<"RefreshToken"> | string
    user_id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token_hash?: StringWithAggregatesFilter<"RefreshToken"> | string
    device_info?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revoked_at?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
  }

  export type HouseholdWhereInput = {
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    household_id?: StringFilter<"Household"> | string
    name?: StringFilter<"Household"> | string
    created_by?: StringFilter<"Household"> | string
    updated_at?: DateTimeFilter<"Household"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: HouseholdMemberListRelationFilter
    invitations?: HouseholdInvitationListRelationFilter
    householdJoinRequests?: HouseholdJoinRequestListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type HouseholdOrderByWithRelationInput = {
    household_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    creator?: UserOrderByWithRelationInput
    members?: HouseholdMemberOrderByRelationAggregateInput
    invitations?: HouseholdInvitationOrderByRelationAggregateInput
    householdJoinRequests?: HouseholdJoinRequestOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type HouseholdWhereUniqueInput = Prisma.AtLeast<{
    household_id?: string
    AND?: HouseholdWhereInput | HouseholdWhereInput[]
    OR?: HouseholdWhereInput[]
    NOT?: HouseholdWhereInput | HouseholdWhereInput[]
    name?: StringFilter<"Household"> | string
    created_by?: StringFilter<"Household"> | string
    updated_at?: DateTimeFilter<"Household"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: HouseholdMemberListRelationFilter
    invitations?: HouseholdInvitationListRelationFilter
    householdJoinRequests?: HouseholdJoinRequestListRelationFilter
    categories?: CategoryListRelationFilter
  }, "household_id">

  export type HouseholdOrderByWithAggregationInput = {
    household_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    _count?: HouseholdCountOrderByAggregateInput
    _max?: HouseholdMaxOrderByAggregateInput
    _min?: HouseholdMinOrderByAggregateInput
  }

  export type HouseholdScalarWhereWithAggregatesInput = {
    AND?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    OR?: HouseholdScalarWhereWithAggregatesInput[]
    NOT?: HouseholdScalarWhereWithAggregatesInput | HouseholdScalarWhereWithAggregatesInput[]
    household_id?: StringWithAggregatesFilter<"Household"> | string
    name?: StringWithAggregatesFilter<"Household"> | string
    created_by?: StringWithAggregatesFilter<"Household"> | string
    updated_at?: DateTimeWithAggregatesFilter<"Household"> | Date | string
  }

  export type HouseholdMemberWhereInput = {
    AND?: HouseholdMemberWhereInput | HouseholdMemberWhereInput[]
    OR?: HouseholdMemberWhereInput[]
    NOT?: HouseholdMemberWhereInput | HouseholdMemberWhereInput[]
    household_id?: StringFilter<"HouseholdMember"> | string
    user_id?: StringFilter<"HouseholdMember"> | string
    role?: EnumRoleFilter<"HouseholdMember"> | $Enums.Role
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HouseholdMemberOrderByWithRelationInput = {
    household_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type HouseholdMemberWhereUniqueInput = Prisma.AtLeast<{
    household_id_user_id?: HouseholdMemberHousehold_idUser_idCompoundUniqueInput
    AND?: HouseholdMemberWhereInput | HouseholdMemberWhereInput[]
    OR?: HouseholdMemberWhereInput[]
    NOT?: HouseholdMemberWhereInput | HouseholdMemberWhereInput[]
    household_id?: StringFilter<"HouseholdMember"> | string
    user_id?: StringFilter<"HouseholdMember"> | string
    role?: EnumRoleFilter<"HouseholdMember"> | $Enums.Role
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "household_id_user_id">

  export type HouseholdMemberOrderByWithAggregationInput = {
    household_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
    _count?: HouseholdMemberCountOrderByAggregateInput
    _max?: HouseholdMemberMaxOrderByAggregateInput
    _min?: HouseholdMemberMinOrderByAggregateInput
  }

  export type HouseholdMemberScalarWhereWithAggregatesInput = {
    AND?: HouseholdMemberScalarWhereWithAggregatesInput | HouseholdMemberScalarWhereWithAggregatesInput[]
    OR?: HouseholdMemberScalarWhereWithAggregatesInput[]
    NOT?: HouseholdMemberScalarWhereWithAggregatesInput | HouseholdMemberScalarWhereWithAggregatesInput[]
    household_id?: StringWithAggregatesFilter<"HouseholdMember"> | string
    user_id?: StringWithAggregatesFilter<"HouseholdMember"> | string
    role?: EnumRoleWithAggregatesFilter<"HouseholdMember"> | $Enums.Role
  }

  export type HouseholdInvitationWhereInput = {
    AND?: HouseholdInvitationWhereInput | HouseholdInvitationWhereInput[]
    OR?: HouseholdInvitationWhereInput[]
    NOT?: HouseholdInvitationWhereInput | HouseholdInvitationWhereInput[]
    invitation_id?: StringFilter<"HouseholdInvitation"> | string
    household_id?: StringFilter<"HouseholdInvitation"> | string
    code?: StringFilter<"HouseholdInvitation"> | string
    invited_by?: StringFilter<"HouseholdInvitation"> | string
    email?: StringFilter<"HouseholdInvitation"> | string
    created_at?: DateTimeFilter<"HouseholdInvitation"> | Date | string
    expires_at?: DateTimeFilter<"HouseholdInvitation"> | Date | string
    status?: EnumInvitationStatusFilter<"HouseholdInvitation"> | $Enums.InvitationStatus
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HouseholdInvitationOrderByWithRelationInput = {
    invitation_id?: SortOrder
    household_id?: SortOrder
    code?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    status?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    inviter?: UserOrderByWithRelationInput
  }

  export type HouseholdInvitationWhereUniqueInput = Prisma.AtLeast<{
    invitation_id?: string
    code?: string
    household_id_email?: HouseholdInvitationHousehold_idEmailCompoundUniqueInput
    AND?: HouseholdInvitationWhereInput | HouseholdInvitationWhereInput[]
    OR?: HouseholdInvitationWhereInput[]
    NOT?: HouseholdInvitationWhereInput | HouseholdInvitationWhereInput[]
    household_id?: StringFilter<"HouseholdInvitation"> | string
    invited_by?: StringFilter<"HouseholdInvitation"> | string
    email?: StringFilter<"HouseholdInvitation"> | string
    created_at?: DateTimeFilter<"HouseholdInvitation"> | Date | string
    expires_at?: DateTimeFilter<"HouseholdInvitation"> | Date | string
    status?: EnumInvitationStatusFilter<"HouseholdInvitation"> | $Enums.InvitationStatus
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "invitation_id" | "code" | "household_id_email">

  export type HouseholdInvitationOrderByWithAggregationInput = {
    invitation_id?: SortOrder
    household_id?: SortOrder
    code?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    status?: SortOrder
    _count?: HouseholdInvitationCountOrderByAggregateInput
    _max?: HouseholdInvitationMaxOrderByAggregateInput
    _min?: HouseholdInvitationMinOrderByAggregateInput
  }

  export type HouseholdInvitationScalarWhereWithAggregatesInput = {
    AND?: HouseholdInvitationScalarWhereWithAggregatesInput | HouseholdInvitationScalarWhereWithAggregatesInput[]
    OR?: HouseholdInvitationScalarWhereWithAggregatesInput[]
    NOT?: HouseholdInvitationScalarWhereWithAggregatesInput | HouseholdInvitationScalarWhereWithAggregatesInput[]
    invitation_id?: StringWithAggregatesFilter<"HouseholdInvitation"> | string
    household_id?: StringWithAggregatesFilter<"HouseholdInvitation"> | string
    code?: StringWithAggregatesFilter<"HouseholdInvitation"> | string
    invited_by?: StringWithAggregatesFilter<"HouseholdInvitation"> | string
    email?: StringWithAggregatesFilter<"HouseholdInvitation"> | string
    created_at?: DateTimeWithAggregatesFilter<"HouseholdInvitation"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"HouseholdInvitation"> | Date | string
    status?: EnumInvitationStatusWithAggregatesFilter<"HouseholdInvitation"> | $Enums.InvitationStatus
  }

  export type HouseholdJoinRequestWhereInput = {
    AND?: HouseholdJoinRequestWhereInput | HouseholdJoinRequestWhereInput[]
    OR?: HouseholdJoinRequestWhereInput[]
    NOT?: HouseholdJoinRequestWhereInput | HouseholdJoinRequestWhereInput[]
    household_id?: StringFilter<"HouseholdJoinRequest"> | string
    requested_by?: StringFilter<"HouseholdJoinRequest"> | string
    status?: EnumJoinRequestStatusFilter<"HouseholdJoinRequest"> | $Enums.JoinRequestStatus
    created_at?: DateTimeFilter<"HouseholdJoinRequest"> | Date | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HouseholdJoinRequestOrderByWithRelationInput = {
    household_id?: SortOrder
    requested_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    household?: HouseholdOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
  }

  export type HouseholdJoinRequestWhereUniqueInput = Prisma.AtLeast<{
    household_id_requested_by?: HouseholdJoinRequestHousehold_idRequested_byCompoundUniqueInput
    AND?: HouseholdJoinRequestWhereInput | HouseholdJoinRequestWhereInput[]
    OR?: HouseholdJoinRequestWhereInput[]
    NOT?: HouseholdJoinRequestWhereInput | HouseholdJoinRequestWhereInput[]
    household_id?: StringFilter<"HouseholdJoinRequest"> | string
    requested_by?: StringFilter<"HouseholdJoinRequest"> | string
    status?: EnumJoinRequestStatusFilter<"HouseholdJoinRequest"> | $Enums.JoinRequestStatus
    created_at?: DateTimeFilter<"HouseholdJoinRequest"> | Date | string
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "household_id_requested_by">

  export type HouseholdJoinRequestOrderByWithAggregationInput = {
    household_id?: SortOrder
    requested_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: HouseholdJoinRequestCountOrderByAggregateInput
    _max?: HouseholdJoinRequestMaxOrderByAggregateInput
    _min?: HouseholdJoinRequestMinOrderByAggregateInput
  }

  export type HouseholdJoinRequestScalarWhereWithAggregatesInput = {
    AND?: HouseholdJoinRequestScalarWhereWithAggregatesInput | HouseholdJoinRequestScalarWhereWithAggregatesInput[]
    OR?: HouseholdJoinRequestScalarWhereWithAggregatesInput[]
    NOT?: HouseholdJoinRequestScalarWhereWithAggregatesInput | HouseholdJoinRequestScalarWhereWithAggregatesInput[]
    household_id?: StringWithAggregatesFilter<"HouseholdJoinRequest"> | string
    requested_by?: StringWithAggregatesFilter<"HouseholdJoinRequest"> | string
    status?: EnumJoinRequestStatusWithAggregatesFilter<"HouseholdJoinRequest"> | $Enums.JoinRequestStatus
    created_at?: DateTimeWithAggregatesFilter<"HouseholdJoinRequest"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category_id?: StringFilter<"Category"> | string
    household_id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    color?: StringNullableFilter<"Category"> | string | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    items?: ItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    category_id?: SortOrder
    household_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    household?: HouseholdOrderByWithRelationInput
    items?: ItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    household_id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    color?: StringNullableFilter<"Category"> | string | null
    household?: XOR<HouseholdScalarRelationFilter, HouseholdWhereInput>
    items?: ItemListRelationFilter
  }, "category_id">

  export type CategoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    household_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    category_id?: StringWithAggregatesFilter<"Category"> | string
    household_id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
    color?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    item_id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    category_id?: StringFilter<"Item"> | string
    icon?: StringNullableFilter<"Item"> | string | null
    item_type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    notes?: StringNullableFilter<"Item"> | string | null
    purchase_link?: StringNullableFilter<"Item"> | string | null
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    created_by?: StringFilter<"Item"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<ItemScheduleNullableScalarRelationFilter, ItemScheduleWhereInput> | null
    histories?: ItemHistoryListRelationFilter
    reminders?: ReminderListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    item_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    icon?: SortOrderInput | SortOrder
    item_type?: SortOrder
    notes?: SortOrderInput | SortOrder
    purchase_link?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    category?: CategoryOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    schedule?: ItemScheduleOrderByWithRelationInput
    histories?: ItemHistoryOrderByRelationAggregateInput
    reminders?: ReminderOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    item_id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    category_id?: StringFilter<"Item"> | string
    icon?: StringNullableFilter<"Item"> | string | null
    item_type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    notes?: StringNullableFilter<"Item"> | string | null
    purchase_link?: StringNullableFilter<"Item"> | string | null
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    created_by?: StringFilter<"Item"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<ItemScheduleNullableScalarRelationFilter, ItemScheduleWhereInput> | null
    histories?: ItemHistoryListRelationFilter
    reminders?: ReminderListRelationFilter
  }, "item_id">

  export type ItemOrderByWithAggregationInput = {
    item_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    icon?: SortOrderInput | SortOrder
    item_type?: SortOrder
    notes?: SortOrderInput | SortOrder
    purchase_link?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    item_id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    category_id?: StringWithAggregatesFilter<"Item"> | string
    icon?: StringNullableWithAggregatesFilter<"Item"> | string | null
    item_type?: EnumItemTypeWithAggregatesFilter<"Item"> | $Enums.ItemType
    notes?: StringNullableWithAggregatesFilter<"Item"> | string | null
    purchase_link?: StringNullableWithAggregatesFilter<"Item"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    created_by?: StringWithAggregatesFilter<"Item"> | string
  }

  export type ItemScheduleWhereInput = {
    AND?: ItemScheduleWhereInput | ItemScheduleWhereInput[]
    OR?: ItemScheduleWhereInput[]
    NOT?: ItemScheduleWhereInput | ItemScheduleWhereInput[]
    item_id?: StringFilter<"ItemSchedule"> | string
    tracking_mode?: EnumTrackingModeFilter<"ItemSchedule"> | $Enums.TrackingMode
    interval_days?: IntNullableFilter<"ItemSchedule"> | number | null
    fixed_due_date?: DateTimeNullableFilter<"ItemSchedule"> | Date | string | null
    recurrence_rule?: StringNullableFilter<"ItemSchedule"> | string | null
    lead_time_days?: IntNullableFilter<"ItemSchedule"> | number | null
    last_completed_at?: DateTimeNullableFilter<"ItemSchedule"> | Date | string | null
    next_due_date?: DateTimeFilter<"ItemSchedule"> | Date | string
    updated_at?: DateTimeFilter<"ItemSchedule"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ItemScheduleOrderByWithRelationInput = {
    item_id?: SortOrder
    tracking_mode?: SortOrder
    interval_days?: SortOrderInput | SortOrder
    fixed_due_date?: SortOrderInput | SortOrder
    recurrence_rule?: SortOrderInput | SortOrder
    lead_time_days?: SortOrderInput | SortOrder
    last_completed_at?: SortOrderInput | SortOrder
    next_due_date?: SortOrder
    updated_at?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type ItemScheduleWhereUniqueInput = Prisma.AtLeast<{
    item_id?: string
    AND?: ItemScheduleWhereInput | ItemScheduleWhereInput[]
    OR?: ItemScheduleWhereInput[]
    NOT?: ItemScheduleWhereInput | ItemScheduleWhereInput[]
    tracking_mode?: EnumTrackingModeFilter<"ItemSchedule"> | $Enums.TrackingMode
    interval_days?: IntNullableFilter<"ItemSchedule"> | number | null
    fixed_due_date?: DateTimeNullableFilter<"ItemSchedule"> | Date | string | null
    recurrence_rule?: StringNullableFilter<"ItemSchedule"> | string | null
    lead_time_days?: IntNullableFilter<"ItemSchedule"> | number | null
    last_completed_at?: DateTimeNullableFilter<"ItemSchedule"> | Date | string | null
    next_due_date?: DateTimeFilter<"ItemSchedule"> | Date | string
    updated_at?: DateTimeFilter<"ItemSchedule"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "item_id">

  export type ItemScheduleOrderByWithAggregationInput = {
    item_id?: SortOrder
    tracking_mode?: SortOrder
    interval_days?: SortOrderInput | SortOrder
    fixed_due_date?: SortOrderInput | SortOrder
    recurrence_rule?: SortOrderInput | SortOrder
    lead_time_days?: SortOrderInput | SortOrder
    last_completed_at?: SortOrderInput | SortOrder
    next_due_date?: SortOrder
    updated_at?: SortOrder
    _count?: ItemScheduleCountOrderByAggregateInput
    _avg?: ItemScheduleAvgOrderByAggregateInput
    _max?: ItemScheduleMaxOrderByAggregateInput
    _min?: ItemScheduleMinOrderByAggregateInput
    _sum?: ItemScheduleSumOrderByAggregateInput
  }

  export type ItemScheduleScalarWhereWithAggregatesInput = {
    AND?: ItemScheduleScalarWhereWithAggregatesInput | ItemScheduleScalarWhereWithAggregatesInput[]
    OR?: ItemScheduleScalarWhereWithAggregatesInput[]
    NOT?: ItemScheduleScalarWhereWithAggregatesInput | ItemScheduleScalarWhereWithAggregatesInput[]
    item_id?: StringWithAggregatesFilter<"ItemSchedule"> | string
    tracking_mode?: EnumTrackingModeWithAggregatesFilter<"ItemSchedule"> | $Enums.TrackingMode
    interval_days?: IntNullableWithAggregatesFilter<"ItemSchedule"> | number | null
    fixed_due_date?: DateTimeNullableWithAggregatesFilter<"ItemSchedule"> | Date | string | null
    recurrence_rule?: StringNullableWithAggregatesFilter<"ItemSchedule"> | string | null
    lead_time_days?: IntNullableWithAggregatesFilter<"ItemSchedule"> | number | null
    last_completed_at?: DateTimeNullableWithAggregatesFilter<"ItemSchedule"> | Date | string | null
    next_due_date?: DateTimeWithAggregatesFilter<"ItemSchedule"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ItemSchedule"> | Date | string
  }

  export type ItemHistoryWhereInput = {
    AND?: ItemHistoryWhereInput | ItemHistoryWhereInput[]
    OR?: ItemHistoryWhereInput[]
    NOT?: ItemHistoryWhereInput | ItemHistoryWhereInput[]
    history_id?: StringFilter<"ItemHistory"> | string
    item_id?: StringFilter<"ItemHistory"> | string
    completed_at?: DateTimeFilter<"ItemHistory"> | Date | string
    completed_by?: StringFilter<"ItemHistory"> | string
    notes?: StringNullableFilter<"ItemHistory"> | string | null
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    completer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ItemHistoryOrderByWithRelationInput = {
    history_id?: SortOrder
    item_id?: SortOrder
    completed_at?: SortOrder
    completed_by?: SortOrder
    notes?: SortOrderInput | SortOrder
    item?: ItemOrderByWithRelationInput
    completer?: UserOrderByWithRelationInput
  }

  export type ItemHistoryWhereUniqueInput = Prisma.AtLeast<{
    history_id?: string
    AND?: ItemHistoryWhereInput | ItemHistoryWhereInput[]
    OR?: ItemHistoryWhereInput[]
    NOT?: ItemHistoryWhereInput | ItemHistoryWhereInput[]
    item_id?: StringFilter<"ItemHistory"> | string
    completed_at?: DateTimeFilter<"ItemHistory"> | Date | string
    completed_by?: StringFilter<"ItemHistory"> | string
    notes?: StringNullableFilter<"ItemHistory"> | string | null
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    completer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "history_id">

  export type ItemHistoryOrderByWithAggregationInput = {
    history_id?: SortOrder
    item_id?: SortOrder
    completed_at?: SortOrder
    completed_by?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ItemHistoryCountOrderByAggregateInput
    _max?: ItemHistoryMaxOrderByAggregateInput
    _min?: ItemHistoryMinOrderByAggregateInput
  }

  export type ItemHistoryScalarWhereWithAggregatesInput = {
    AND?: ItemHistoryScalarWhereWithAggregatesInput | ItemHistoryScalarWhereWithAggregatesInput[]
    OR?: ItemHistoryScalarWhereWithAggregatesInput[]
    NOT?: ItemHistoryScalarWhereWithAggregatesInput | ItemHistoryScalarWhereWithAggregatesInput[]
    history_id?: StringWithAggregatesFilter<"ItemHistory"> | string
    item_id?: StringWithAggregatesFilter<"ItemHistory"> | string
    completed_at?: DateTimeWithAggregatesFilter<"ItemHistory"> | Date | string
    completed_by?: StringWithAggregatesFilter<"ItemHistory"> | string
    notes?: StringNullableWithAggregatesFilter<"ItemHistory"> | string | null
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    reminder_id?: StringFilter<"Reminder"> | string
    item_id?: StringFilter<"Reminder"> | string
    user_id?: StringFilter<"Reminder"> | string
    remind_at?: DateTimeFilter<"Reminder"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    reminder_id?: SortOrder
    item_id?: SortOrder
    user_id?: SortOrder
    remind_at?: SortOrder
    item?: ItemOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    reminder_id?: string
    item_id_user_id_remind_at?: ReminderItem_idUser_idRemind_atCompoundUniqueInput
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    item_id?: StringFilter<"Reminder"> | string
    user_id?: StringFilter<"Reminder"> | string
    remind_at?: DateTimeFilter<"Reminder"> | Date | string
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "reminder_id" | "item_id_user_id_remind_at">

  export type ReminderOrderByWithAggregationInput = {
    reminder_id?: SortOrder
    item_id?: SortOrder
    user_id?: SortOrder
    remind_at?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    reminder_id?: StringWithAggregatesFilter<"Reminder"> | string
    item_id?: StringWithAggregatesFilter<"Reminder"> | string
    user_id?: StringWithAggregatesFilter<"Reminder"> | string
    remind_at?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
  }

  export type UserCreateInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestCreateNestedManyWithoutRequesterInput
    items?: ItemCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryCreateNestedManyWithoutCompleterInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput
    items?: ItemUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    token_id?: string
    token_hash: string
    device_info?: string | null
    created_at?: Date | string
    expires_at: Date | string
    revoked_at?: Date | string | null
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    token_id?: string
    user_id: string
    token_hash: string
    device_info?: string | null
    created_at?: Date | string
    expires_at: Date | string
    revoked_at?: Date | string | null
  }

  export type RefreshTokenUpdateInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateManyInput = {
    token_id?: string
    user_id: string
    token_hash: string
    device_info?: string | null
    created_at?: Date | string
    expires_at: Date | string
    revoked_at?: Date | string | null
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HouseholdCreateInput = {
    household_id?: string
    name: string
    updated_at?: Date | string
    creator: UserCreateNestedOneWithoutCreatedHouseholdsInput
    members?: HouseholdMemberCreateNestedManyWithoutHouseholdInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestCreateNestedManyWithoutHouseholdInput
    categories?: CategoryCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateInput = {
    household_id?: string
    name: string
    created_by: string
    updated_at?: Date | string
    members?: HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutHouseholdInput
    categories?: CategoryUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUpdateInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedHouseholdsNestedInput
    members?: HouseholdMemberUpdateManyWithoutHouseholdNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdCreateManyInput = {
    household_id?: string
    name: string
    created_by: string
    updated_at?: Date | string
  }

  export type HouseholdUpdateManyMutationInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdUncheckedUpdateManyInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberCreateInput = {
    role: $Enums.Role
    household: HouseholdCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type HouseholdMemberUncheckedCreateInput = {
    household_id: string
    user_id: string
    role: $Enums.Role
  }

  export type HouseholdMemberUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type HouseholdMemberUncheckedUpdateInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type HouseholdMemberCreateManyInput = {
    household_id: string
    user_id: string
    role: $Enums.Role
  }

  export type HouseholdMemberUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type HouseholdMemberUncheckedUpdateManyInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type HouseholdInvitationCreateInput = {
    invitation_id?: string
    code: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
    household: HouseholdCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutInvitationsInput
  }

  export type HouseholdInvitationUncheckedCreateInput = {
    invitation_id?: string
    household_id: string
    code: string
    invited_by: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
  }

  export type HouseholdInvitationUpdateInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    household?: HouseholdUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type HouseholdInvitationUncheckedUpdateInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    household_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
  }

  export type HouseholdInvitationCreateManyInput = {
    invitation_id?: string
    household_id: string
    code: string
    invited_by: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
  }

  export type HouseholdInvitationUpdateManyMutationInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
  }

  export type HouseholdInvitationUncheckedUpdateManyInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    household_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
  }

  export type HouseholdJoinRequestCreateInput = {
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
    household: HouseholdCreateNestedOneWithoutHouseholdJoinRequestsInput
    requester: UserCreateNestedOneWithoutRequestsInput
  }

  export type HouseholdJoinRequestUncheckedCreateInput = {
    household_id: string
    requested_by: string
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
  }

  export type HouseholdJoinRequestUpdateInput = {
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutHouseholdJoinRequestsNestedInput
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type HouseholdJoinRequestUncheckedUpdateInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    requested_by?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdJoinRequestCreateManyInput = {
    household_id: string
    requested_by: string
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
  }

  export type HouseholdJoinRequestUpdateManyMutationInput = {
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdJoinRequestUncheckedUpdateManyInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    requested_by?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    category_id?: string
    name: string
    description?: string | null
    icon?: string | null
    color?: string | null
    household: HouseholdCreateNestedOneWithoutCategoriesInput
    items?: ItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    category_id?: string
    household_id: string
    name: string
    description?: string | null
    icon?: string | null
    color?: string | null
    items?: ItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    household?: HouseholdUpdateOneRequiredWithoutCategoriesNestedInput
    items?: ItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    items?: ItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    category_id?: string
    household_id: string
    name: string
    description?: string | null
    icon?: string | null
    color?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCreateInput = {
    item_id?: string
    name: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutItemsInput
    creator: UserCreateNestedOneWithoutItemsInput
    schedule?: ItemScheduleCreateNestedOneWithoutItemInput
    histories?: ItemHistoryCreateNestedManyWithoutItemInput
    reminders?: ReminderCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    item_id?: string
    name: string
    category_id: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
    schedule?: ItemScheduleUncheckedCreateNestedOneWithoutItemInput
    histories?: ItemHistoryUncheckedCreateNestedManyWithoutItemInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    creator?: UserUpdateOneRequiredWithoutItemsNestedInput
    schedule?: ItemScheduleUpdateOneWithoutItemNestedInput
    histories?: ItemHistoryUpdateManyWithoutItemNestedInput
    reminders?: ReminderUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    schedule?: ItemScheduleUncheckedUpdateOneWithoutItemNestedInput
    histories?: ItemHistoryUncheckedUpdateManyWithoutItemNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    item_id?: string
    name: string
    category_id: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
  }

  export type ItemUpdateManyMutationInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type ItemScheduleCreateInput = {
    tracking_mode: $Enums.TrackingMode
    interval_days?: number | null
    fixed_due_date?: Date | string | null
    recurrence_rule?: string | null
    lead_time_days?: number | null
    last_completed_at?: Date | string | null
    next_due_date: Date | string
    updated_at?: Date | string
    item: ItemCreateNestedOneWithoutScheduleInput
  }

  export type ItemScheduleUncheckedCreateInput = {
    item_id: string
    tracking_mode: $Enums.TrackingMode
    interval_days?: number | null
    fixed_due_date?: Date | string | null
    recurrence_rule?: string | null
    lead_time_days?: number | null
    last_completed_at?: Date | string | null
    next_due_date: Date | string
    updated_at?: Date | string
  }

  export type ItemScheduleUpdateInput = {
    tracking_mode?: EnumTrackingModeFieldUpdateOperationsInput | $Enums.TrackingMode
    interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    fixed_due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_rule?: NullableStringFieldUpdateOperationsInput | string | null
    lead_time_days?: NullableIntFieldUpdateOperationsInput | number | null
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ItemScheduleUncheckedUpdateInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    tracking_mode?: EnumTrackingModeFieldUpdateOperationsInput | $Enums.TrackingMode
    interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    fixed_due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_rule?: NullableStringFieldUpdateOperationsInput | string | null
    lead_time_days?: NullableIntFieldUpdateOperationsInput | number | null
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemScheduleCreateManyInput = {
    item_id: string
    tracking_mode: $Enums.TrackingMode
    interval_days?: number | null
    fixed_due_date?: Date | string | null
    recurrence_rule?: string | null
    lead_time_days?: number | null
    last_completed_at?: Date | string | null
    next_due_date: Date | string
    updated_at?: Date | string
  }

  export type ItemScheduleUpdateManyMutationInput = {
    tracking_mode?: EnumTrackingModeFieldUpdateOperationsInput | $Enums.TrackingMode
    interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    fixed_due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_rule?: NullableStringFieldUpdateOperationsInput | string | null
    lead_time_days?: NullableIntFieldUpdateOperationsInput | number | null
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemScheduleUncheckedUpdateManyInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    tracking_mode?: EnumTrackingModeFieldUpdateOperationsInput | $Enums.TrackingMode
    interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    fixed_due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_rule?: NullableStringFieldUpdateOperationsInput | string | null
    lead_time_days?: NullableIntFieldUpdateOperationsInput | number | null
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemHistoryCreateInput = {
    history_id?: string
    completed_at?: Date | string
    notes?: string | null
    item: ItemCreateNestedOneWithoutHistoriesInput
    completer: UserCreateNestedOneWithoutItemHistoriesInput
  }

  export type ItemHistoryUncheckedCreateInput = {
    history_id?: string
    item_id: string
    completed_at?: Date | string
    completed_by: string
    notes?: string | null
  }

  export type ItemHistoryUpdateInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    item?: ItemUpdateOneRequiredWithoutHistoriesNestedInput
    completer?: UserUpdateOneRequiredWithoutItemHistoriesNestedInput
  }

  export type ItemHistoryUncheckedUpdateInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_by?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemHistoryCreateManyInput = {
    history_id?: string
    item_id: string
    completed_at?: Date | string
    completed_by: string
    notes?: string | null
  }

  export type ItemHistoryUpdateManyMutationInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemHistoryUncheckedUpdateManyInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_by?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderCreateInput = {
    reminder_id?: string
    remind_at: Date | string
    item: ItemCreateNestedOneWithoutRemindersInput
    user: UserCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateInput = {
    reminder_id?: string
    item_id: string
    user_id: string
    remind_at: Date | string
  }

  export type ReminderUpdateInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutRemindersNestedInput
    user?: UserUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateManyInput = {
    reminder_id?: string
    item_id: string
    user_id: string
    remind_at: Date | string
  }

  export type ReminderUpdateManyMutationInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HouseholdListRelationFilter = {
    every?: HouseholdWhereInput
    some?: HouseholdWhereInput
    none?: HouseholdWhereInput
  }

  export type HouseholdMemberListRelationFilter = {
    every?: HouseholdMemberWhereInput
    some?: HouseholdMemberWhereInput
    none?: HouseholdMemberWhereInput
  }

  export type HouseholdInvitationListRelationFilter = {
    every?: HouseholdInvitationWhereInput
    some?: HouseholdInvitationWhereInput
    none?: HouseholdInvitationWhereInput
  }

  export type HouseholdJoinRequestListRelationFilter = {
    every?: HouseholdJoinRequestWhereInput
    some?: HouseholdJoinRequestWhereInput
    none?: HouseholdJoinRequestWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ItemHistoryListRelationFilter = {
    every?: ItemHistoryWhereInput
    some?: ItemHistoryWhereInput
    none?: ItemHistoryWhereInput
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HouseholdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdJoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    token_id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    device_info?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    token_id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    device_info?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    token_id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    device_info?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseholdCountOrderByAggregateInput = {
    household_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
  }

  export type HouseholdMaxOrderByAggregateInput = {
    household_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
  }

  export type HouseholdMinOrderByAggregateInput = {
    household_id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type HouseholdScalarRelationFilter = {
    is?: HouseholdWhereInput
    isNot?: HouseholdWhereInput
  }

  export type HouseholdMemberHousehold_idUser_idCompoundUniqueInput = {
    household_id: string
    user_id: string
  }

  export type HouseholdMemberCountOrderByAggregateInput = {
    household_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type HouseholdMemberMaxOrderByAggregateInput = {
    household_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type HouseholdMemberMinOrderByAggregateInput = {
    household_id?: SortOrder
    user_id?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type HouseholdInvitationHousehold_idEmailCompoundUniqueInput = {
    household_id: string
    email: string
  }

  export type HouseholdInvitationCountOrderByAggregateInput = {
    invitation_id?: SortOrder
    household_id?: SortOrder
    code?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    status?: SortOrder
  }

  export type HouseholdInvitationMaxOrderByAggregateInput = {
    invitation_id?: SortOrder
    household_id?: SortOrder
    code?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    status?: SortOrder
  }

  export type HouseholdInvitationMinOrderByAggregateInput = {
    invitation_id?: SortOrder
    household_id?: SortOrder
    code?: SortOrder
    invited_by?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    status?: SortOrder
  }

  export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type EnumJoinRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | EnumJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinRequestStatusFilter<$PrismaModel> | $Enums.JoinRequestStatus
  }

  export type HouseholdJoinRequestHousehold_idRequested_byCompoundUniqueInput = {
    household_id: string
    requested_by: string
  }

  export type HouseholdJoinRequestCountOrderByAggregateInput = {
    household_id?: SortOrder
    requested_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type HouseholdJoinRequestMaxOrderByAggregateInput = {
    household_id?: SortOrder
    requested_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type HouseholdJoinRequestMinOrderByAggregateInput = {
    household_id?: SortOrder
    requested_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type EnumJoinRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | EnumJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.JoinRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJoinRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumJoinRequestStatusFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    household_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    household_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    household_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
  }

  export type EnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ItemScheduleNullableScalarRelationFilter = {
    is?: ItemScheduleWhereInput | null
    isNot?: ItemScheduleWhereInput | null
  }

  export type ItemCountOrderByAggregateInput = {
    item_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    icon?: SortOrder
    item_type?: SortOrder
    notes?: SortOrder
    purchase_link?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    item_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    icon?: SortOrder
    item_type?: SortOrder
    notes?: SortOrder
    purchase_link?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    item_id?: SortOrder
    name?: SortOrder
    category_id?: SortOrder
    icon?: SortOrder
    item_type?: SortOrder
    notes?: SortOrder
    purchase_link?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
  }

  export type EnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type EnumTrackingModeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrackingMode | EnumTrackingModeFieldRefInput<$PrismaModel>
    in?: $Enums.TrackingMode[] | ListEnumTrackingModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrackingMode[] | ListEnumTrackingModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrackingModeFilter<$PrismaModel> | $Enums.TrackingMode
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemScheduleCountOrderByAggregateInput = {
    item_id?: SortOrder
    tracking_mode?: SortOrder
    interval_days?: SortOrder
    fixed_due_date?: SortOrder
    recurrence_rule?: SortOrder
    lead_time_days?: SortOrder
    last_completed_at?: SortOrder
    next_due_date?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemScheduleAvgOrderByAggregateInput = {
    interval_days?: SortOrder
    lead_time_days?: SortOrder
  }

  export type ItemScheduleMaxOrderByAggregateInput = {
    item_id?: SortOrder
    tracking_mode?: SortOrder
    interval_days?: SortOrder
    fixed_due_date?: SortOrder
    recurrence_rule?: SortOrder
    lead_time_days?: SortOrder
    last_completed_at?: SortOrder
    next_due_date?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemScheduleMinOrderByAggregateInput = {
    item_id?: SortOrder
    tracking_mode?: SortOrder
    interval_days?: SortOrder
    fixed_due_date?: SortOrder
    recurrence_rule?: SortOrder
    lead_time_days?: SortOrder
    last_completed_at?: SortOrder
    next_due_date?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemScheduleSumOrderByAggregateInput = {
    interval_days?: SortOrder
    lead_time_days?: SortOrder
  }

  export type EnumTrackingModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrackingMode | EnumTrackingModeFieldRefInput<$PrismaModel>
    in?: $Enums.TrackingMode[] | ListEnumTrackingModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrackingMode[] | ListEnumTrackingModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrackingModeWithAggregatesFilter<$PrismaModel> | $Enums.TrackingMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrackingModeFilter<$PrismaModel>
    _max?: NestedEnumTrackingModeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ItemHistoryCountOrderByAggregateInput = {
    history_id?: SortOrder
    item_id?: SortOrder
    completed_at?: SortOrder
    completed_by?: SortOrder
    notes?: SortOrder
  }

  export type ItemHistoryMaxOrderByAggregateInput = {
    history_id?: SortOrder
    item_id?: SortOrder
    completed_at?: SortOrder
    completed_by?: SortOrder
    notes?: SortOrder
  }

  export type ItemHistoryMinOrderByAggregateInput = {
    history_id?: SortOrder
    item_id?: SortOrder
    completed_at?: SortOrder
    completed_by?: SortOrder
    notes?: SortOrder
  }

  export type ReminderItem_idUser_idRemind_atCompoundUniqueInput = {
    item_id: string
    user_id: string
    remind_at: Date | string
  }

  export type ReminderCountOrderByAggregateInput = {
    reminder_id?: SortOrder
    item_id?: SortOrder
    user_id?: SortOrder
    remind_at?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    reminder_id?: SortOrder
    item_id?: SortOrder
    user_id?: SortOrder
    remind_at?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    reminder_id?: SortOrder
    item_id?: SortOrder
    user_id?: SortOrder
    remind_at?: SortOrder
  }

  export type HouseholdCreateNestedManyWithoutCreatorInput = {
    create?: XOR<HouseholdCreateWithoutCreatorInput, HouseholdUncheckedCreateWithoutCreatorInput> | HouseholdCreateWithoutCreatorInput[] | HouseholdUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: HouseholdCreateOrConnectWithoutCreatorInput | HouseholdCreateOrConnectWithoutCreatorInput[]
    createMany?: HouseholdCreateManyCreatorInputEnvelope
    connect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
  }

  export type HouseholdMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput> | HouseholdMemberCreateWithoutUserInput[] | HouseholdMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutUserInput | HouseholdMemberCreateOrConnectWithoutUserInput[]
    createMany?: HouseholdMemberCreateManyUserInputEnvelope
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
  }

  export type HouseholdInvitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<HouseholdInvitationCreateWithoutInviterInput, HouseholdInvitationUncheckedCreateWithoutInviterInput> | HouseholdInvitationCreateWithoutInviterInput[] | HouseholdInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: HouseholdInvitationCreateOrConnectWithoutInviterInput | HouseholdInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: HouseholdInvitationCreateManyInviterInputEnvelope
    connect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
  }

  export type HouseholdJoinRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<HouseholdJoinRequestCreateWithoutRequesterInput, HouseholdJoinRequestUncheckedCreateWithoutRequesterInput> | HouseholdJoinRequestCreateWithoutRequesterInput[] | HouseholdJoinRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: HouseholdJoinRequestCreateOrConnectWithoutRequesterInput | HouseholdJoinRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: HouseholdJoinRequestCreateManyRequesterInputEnvelope
    connect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ItemCreateWithoutCreatorInput, ItemUncheckedCreateWithoutCreatorInput> | ItemCreateWithoutCreatorInput[] | ItemUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCreatorInput | ItemCreateOrConnectWithoutCreatorInput[]
    createMany?: ItemCreateManyCreatorInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemHistoryCreateNestedManyWithoutCompleterInput = {
    create?: XOR<ItemHistoryCreateWithoutCompleterInput, ItemHistoryUncheckedCreateWithoutCompleterInput> | ItemHistoryCreateWithoutCompleterInput[] | ItemHistoryUncheckedCreateWithoutCompleterInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutCompleterInput | ItemHistoryCreateOrConnectWithoutCompleterInput[]
    createMany?: ItemHistoryCreateManyCompleterInputEnvelope
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type HouseholdUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<HouseholdCreateWithoutCreatorInput, HouseholdUncheckedCreateWithoutCreatorInput> | HouseholdCreateWithoutCreatorInput[] | HouseholdUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: HouseholdCreateOrConnectWithoutCreatorInput | HouseholdCreateOrConnectWithoutCreatorInput[]
    createMany?: HouseholdCreateManyCreatorInputEnvelope
    connect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
  }

  export type HouseholdMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput> | HouseholdMemberCreateWithoutUserInput[] | HouseholdMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutUserInput | HouseholdMemberCreateOrConnectWithoutUserInput[]
    createMany?: HouseholdMemberCreateManyUserInputEnvelope
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
  }

  export type HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<HouseholdInvitationCreateWithoutInviterInput, HouseholdInvitationUncheckedCreateWithoutInviterInput> | HouseholdInvitationCreateWithoutInviterInput[] | HouseholdInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: HouseholdInvitationCreateOrConnectWithoutInviterInput | HouseholdInvitationCreateOrConnectWithoutInviterInput[]
    createMany?: HouseholdInvitationCreateManyInviterInputEnvelope
    connect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
  }

  export type HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<HouseholdJoinRequestCreateWithoutRequesterInput, HouseholdJoinRequestUncheckedCreateWithoutRequesterInput> | HouseholdJoinRequestCreateWithoutRequesterInput[] | HouseholdJoinRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: HouseholdJoinRequestCreateOrConnectWithoutRequesterInput | HouseholdJoinRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: HouseholdJoinRequestCreateManyRequesterInputEnvelope
    connect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ItemCreateWithoutCreatorInput, ItemUncheckedCreateWithoutCreatorInput> | ItemCreateWithoutCreatorInput[] | ItemUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCreatorInput | ItemCreateOrConnectWithoutCreatorInput[]
    createMany?: ItemCreateManyCreatorInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput = {
    create?: XOR<ItemHistoryCreateWithoutCompleterInput, ItemHistoryUncheckedCreateWithoutCompleterInput> | ItemHistoryCreateWithoutCompleterInput[] | ItemHistoryUncheckedCreateWithoutCompleterInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutCompleterInput | ItemHistoryCreateOrConnectWithoutCompleterInput[]
    createMany?: ItemHistoryCreateManyCompleterInputEnvelope
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HouseholdUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<HouseholdCreateWithoutCreatorInput, HouseholdUncheckedCreateWithoutCreatorInput> | HouseholdCreateWithoutCreatorInput[] | HouseholdUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: HouseholdCreateOrConnectWithoutCreatorInput | HouseholdCreateOrConnectWithoutCreatorInput[]
    upsert?: HouseholdUpsertWithWhereUniqueWithoutCreatorInput | HouseholdUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: HouseholdCreateManyCreatorInputEnvelope
    set?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    disconnect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    delete?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    connect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    update?: HouseholdUpdateWithWhereUniqueWithoutCreatorInput | HouseholdUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: HouseholdUpdateManyWithWhereWithoutCreatorInput | HouseholdUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: HouseholdScalarWhereInput | HouseholdScalarWhereInput[]
  }

  export type HouseholdMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput> | HouseholdMemberCreateWithoutUserInput[] | HouseholdMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutUserInput | HouseholdMemberCreateOrConnectWithoutUserInput[]
    upsert?: HouseholdMemberUpsertWithWhereUniqueWithoutUserInput | HouseholdMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HouseholdMemberCreateManyUserInputEnvelope
    set?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    disconnect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    delete?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    update?: HouseholdMemberUpdateWithWhereUniqueWithoutUserInput | HouseholdMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HouseholdMemberUpdateManyWithWhereWithoutUserInput | HouseholdMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
  }

  export type HouseholdInvitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<HouseholdInvitationCreateWithoutInviterInput, HouseholdInvitationUncheckedCreateWithoutInviterInput> | HouseholdInvitationCreateWithoutInviterInput[] | HouseholdInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: HouseholdInvitationCreateOrConnectWithoutInviterInput | HouseholdInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: HouseholdInvitationUpsertWithWhereUniqueWithoutInviterInput | HouseholdInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: HouseholdInvitationCreateManyInviterInputEnvelope
    set?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    disconnect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    delete?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    connect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    update?: HouseholdInvitationUpdateWithWhereUniqueWithoutInviterInput | HouseholdInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: HouseholdInvitationUpdateManyWithWhereWithoutInviterInput | HouseholdInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: HouseholdInvitationScalarWhereInput | HouseholdInvitationScalarWhereInput[]
  }

  export type HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<HouseholdJoinRequestCreateWithoutRequesterInput, HouseholdJoinRequestUncheckedCreateWithoutRequesterInput> | HouseholdJoinRequestCreateWithoutRequesterInput[] | HouseholdJoinRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: HouseholdJoinRequestCreateOrConnectWithoutRequesterInput | HouseholdJoinRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: HouseholdJoinRequestUpsertWithWhereUniqueWithoutRequesterInput | HouseholdJoinRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: HouseholdJoinRequestCreateManyRequesterInputEnvelope
    set?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    disconnect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    delete?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    connect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    update?: HouseholdJoinRequestUpdateWithWhereUniqueWithoutRequesterInput | HouseholdJoinRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: HouseholdJoinRequestUpdateManyWithWhereWithoutRequesterInput | HouseholdJoinRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: HouseholdJoinRequestScalarWhereInput | HouseholdJoinRequestScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ItemCreateWithoutCreatorInput, ItemUncheckedCreateWithoutCreatorInput> | ItemCreateWithoutCreatorInput[] | ItemUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCreatorInput | ItemCreateOrConnectWithoutCreatorInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCreatorInput | ItemUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ItemCreateManyCreatorInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCreatorInput | ItemUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCreatorInput | ItemUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemHistoryUpdateManyWithoutCompleterNestedInput = {
    create?: XOR<ItemHistoryCreateWithoutCompleterInput, ItemHistoryUncheckedCreateWithoutCompleterInput> | ItemHistoryCreateWithoutCompleterInput[] | ItemHistoryUncheckedCreateWithoutCompleterInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutCompleterInput | ItemHistoryCreateOrConnectWithoutCompleterInput[]
    upsert?: ItemHistoryUpsertWithWhereUniqueWithoutCompleterInput | ItemHistoryUpsertWithWhereUniqueWithoutCompleterInput[]
    createMany?: ItemHistoryCreateManyCompleterInputEnvelope
    set?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    disconnect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    delete?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    update?: ItemHistoryUpdateWithWhereUniqueWithoutCompleterInput | ItemHistoryUpdateWithWhereUniqueWithoutCompleterInput[]
    updateMany?: ItemHistoryUpdateManyWithWhereWithoutCompleterInput | ItemHistoryUpdateManyWithWhereWithoutCompleterInput[]
    deleteMany?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type HouseholdUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<HouseholdCreateWithoutCreatorInput, HouseholdUncheckedCreateWithoutCreatorInput> | HouseholdCreateWithoutCreatorInput[] | HouseholdUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: HouseholdCreateOrConnectWithoutCreatorInput | HouseholdCreateOrConnectWithoutCreatorInput[]
    upsert?: HouseholdUpsertWithWhereUniqueWithoutCreatorInput | HouseholdUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: HouseholdCreateManyCreatorInputEnvelope
    set?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    disconnect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    delete?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    connect?: HouseholdWhereUniqueInput | HouseholdWhereUniqueInput[]
    update?: HouseholdUpdateWithWhereUniqueWithoutCreatorInput | HouseholdUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: HouseholdUpdateManyWithWhereWithoutCreatorInput | HouseholdUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: HouseholdScalarWhereInput | HouseholdScalarWhereInput[]
  }

  export type HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput> | HouseholdMemberCreateWithoutUserInput[] | HouseholdMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutUserInput | HouseholdMemberCreateOrConnectWithoutUserInput[]
    upsert?: HouseholdMemberUpsertWithWhereUniqueWithoutUserInput | HouseholdMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HouseholdMemberCreateManyUserInputEnvelope
    set?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    disconnect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    delete?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    update?: HouseholdMemberUpdateWithWhereUniqueWithoutUserInput | HouseholdMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HouseholdMemberUpdateManyWithWhereWithoutUserInput | HouseholdMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
  }

  export type HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<HouseholdInvitationCreateWithoutInviterInput, HouseholdInvitationUncheckedCreateWithoutInviterInput> | HouseholdInvitationCreateWithoutInviterInput[] | HouseholdInvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: HouseholdInvitationCreateOrConnectWithoutInviterInput | HouseholdInvitationCreateOrConnectWithoutInviterInput[]
    upsert?: HouseholdInvitationUpsertWithWhereUniqueWithoutInviterInput | HouseholdInvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: HouseholdInvitationCreateManyInviterInputEnvelope
    set?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    disconnect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    delete?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    connect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    update?: HouseholdInvitationUpdateWithWhereUniqueWithoutInviterInput | HouseholdInvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: HouseholdInvitationUpdateManyWithWhereWithoutInviterInput | HouseholdInvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: HouseholdInvitationScalarWhereInput | HouseholdInvitationScalarWhereInput[]
  }

  export type HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<HouseholdJoinRequestCreateWithoutRequesterInput, HouseholdJoinRequestUncheckedCreateWithoutRequesterInput> | HouseholdJoinRequestCreateWithoutRequesterInput[] | HouseholdJoinRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: HouseholdJoinRequestCreateOrConnectWithoutRequesterInput | HouseholdJoinRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: HouseholdJoinRequestUpsertWithWhereUniqueWithoutRequesterInput | HouseholdJoinRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: HouseholdJoinRequestCreateManyRequesterInputEnvelope
    set?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    disconnect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    delete?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    connect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    update?: HouseholdJoinRequestUpdateWithWhereUniqueWithoutRequesterInput | HouseholdJoinRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: HouseholdJoinRequestUpdateManyWithWhereWithoutRequesterInput | HouseholdJoinRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: HouseholdJoinRequestScalarWhereInput | HouseholdJoinRequestScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ItemCreateWithoutCreatorInput, ItemUncheckedCreateWithoutCreatorInput> | ItemCreateWithoutCreatorInput[] | ItemUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCreatorInput | ItemCreateOrConnectWithoutCreatorInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCreatorInput | ItemUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ItemCreateManyCreatorInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCreatorInput | ItemUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCreatorInput | ItemUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput = {
    create?: XOR<ItemHistoryCreateWithoutCompleterInput, ItemHistoryUncheckedCreateWithoutCompleterInput> | ItemHistoryCreateWithoutCompleterInput[] | ItemHistoryUncheckedCreateWithoutCompleterInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutCompleterInput | ItemHistoryCreateOrConnectWithoutCompleterInput[]
    upsert?: ItemHistoryUpsertWithWhereUniqueWithoutCompleterInput | ItemHistoryUpsertWithWhereUniqueWithoutCompleterInput[]
    createMany?: ItemHistoryCreateManyCompleterInputEnvelope
    set?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    disconnect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    delete?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    update?: ItemHistoryUpdateWithWhereUniqueWithoutCompleterInput | ItemHistoryUpdateWithWhereUniqueWithoutCompleterInput[]
    updateMany?: ItemHistoryUpdateManyWithWhereWithoutCompleterInput | ItemHistoryUpdateManyWithWhereWithoutCompleterInput[]
    deleteMany?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutCreatedHouseholdsInput = {
    create?: XOR<UserCreateWithoutCreatedHouseholdsInput, UserUncheckedCreateWithoutCreatedHouseholdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedHouseholdsInput
    connect?: UserWhereUniqueInput
  }

  export type HouseholdMemberCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput> | HouseholdMemberCreateWithoutHouseholdInput[] | HouseholdMemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutHouseholdInput | HouseholdMemberCreateOrConnectWithoutHouseholdInput[]
    createMany?: HouseholdMemberCreateManyHouseholdInputEnvelope
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
  }

  export type HouseholdInvitationCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<HouseholdInvitationCreateWithoutHouseholdInput, HouseholdInvitationUncheckedCreateWithoutHouseholdInput> | HouseholdInvitationCreateWithoutHouseholdInput[] | HouseholdInvitationUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdInvitationCreateOrConnectWithoutHouseholdInput | HouseholdInvitationCreateOrConnectWithoutHouseholdInput[]
    createMany?: HouseholdInvitationCreateManyHouseholdInputEnvelope
    connect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
  }

  export type HouseholdJoinRequestCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<HouseholdJoinRequestCreateWithoutHouseholdInput, HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput> | HouseholdJoinRequestCreateWithoutHouseholdInput[] | HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput | HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput[]
    createMany?: HouseholdJoinRequestCreateManyHouseholdInputEnvelope
    connect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput> | CategoryCreateWithoutHouseholdInput[] | CategoryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutHouseholdInput | CategoryCreateOrConnectWithoutHouseholdInput[]
    createMany?: CategoryCreateManyHouseholdInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput> | HouseholdMemberCreateWithoutHouseholdInput[] | HouseholdMemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutHouseholdInput | HouseholdMemberCreateOrConnectWithoutHouseholdInput[]
    createMany?: HouseholdMemberCreateManyHouseholdInputEnvelope
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
  }

  export type HouseholdInvitationUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<HouseholdInvitationCreateWithoutHouseholdInput, HouseholdInvitationUncheckedCreateWithoutHouseholdInput> | HouseholdInvitationCreateWithoutHouseholdInput[] | HouseholdInvitationUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdInvitationCreateOrConnectWithoutHouseholdInput | HouseholdInvitationCreateOrConnectWithoutHouseholdInput[]
    createMany?: HouseholdInvitationCreateManyHouseholdInputEnvelope
    connect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
  }

  export type HouseholdJoinRequestUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<HouseholdJoinRequestCreateWithoutHouseholdInput, HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput> | HouseholdJoinRequestCreateWithoutHouseholdInput[] | HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput | HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput[]
    createMany?: HouseholdJoinRequestCreateManyHouseholdInputEnvelope
    connect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutHouseholdInput = {
    create?: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput> | CategoryCreateWithoutHouseholdInput[] | CategoryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutHouseholdInput | CategoryCreateOrConnectWithoutHouseholdInput[]
    createMany?: CategoryCreateManyHouseholdInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedHouseholdsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedHouseholdsInput, UserUncheckedCreateWithoutCreatedHouseholdsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedHouseholdsInput
    upsert?: UserUpsertWithoutCreatedHouseholdsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedHouseholdsInput, UserUpdateWithoutCreatedHouseholdsInput>, UserUncheckedUpdateWithoutCreatedHouseholdsInput>
  }

  export type HouseholdMemberUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput> | HouseholdMemberCreateWithoutHouseholdInput[] | HouseholdMemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutHouseholdInput | HouseholdMemberCreateOrConnectWithoutHouseholdInput[]
    upsert?: HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput | HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: HouseholdMemberCreateManyHouseholdInputEnvelope
    set?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    disconnect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    delete?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    update?: HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput | HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput | HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
  }

  export type HouseholdInvitationUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<HouseholdInvitationCreateWithoutHouseholdInput, HouseholdInvitationUncheckedCreateWithoutHouseholdInput> | HouseholdInvitationCreateWithoutHouseholdInput[] | HouseholdInvitationUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdInvitationCreateOrConnectWithoutHouseholdInput | HouseholdInvitationCreateOrConnectWithoutHouseholdInput[]
    upsert?: HouseholdInvitationUpsertWithWhereUniqueWithoutHouseholdInput | HouseholdInvitationUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: HouseholdInvitationCreateManyHouseholdInputEnvelope
    set?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    disconnect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    delete?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    connect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    update?: HouseholdInvitationUpdateWithWhereUniqueWithoutHouseholdInput | HouseholdInvitationUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: HouseholdInvitationUpdateManyWithWhereWithoutHouseholdInput | HouseholdInvitationUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: HouseholdInvitationScalarWhereInput | HouseholdInvitationScalarWhereInput[]
  }

  export type HouseholdJoinRequestUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<HouseholdJoinRequestCreateWithoutHouseholdInput, HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput> | HouseholdJoinRequestCreateWithoutHouseholdInput[] | HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput | HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput[]
    upsert?: HouseholdJoinRequestUpsertWithWhereUniqueWithoutHouseholdInput | HouseholdJoinRequestUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: HouseholdJoinRequestCreateManyHouseholdInputEnvelope
    set?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    disconnect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    delete?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    connect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    update?: HouseholdJoinRequestUpdateWithWhereUniqueWithoutHouseholdInput | HouseholdJoinRequestUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: HouseholdJoinRequestUpdateManyWithWhereWithoutHouseholdInput | HouseholdJoinRequestUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: HouseholdJoinRequestScalarWhereInput | HouseholdJoinRequestScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput> | CategoryCreateWithoutHouseholdInput[] | CategoryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutHouseholdInput | CategoryCreateOrConnectWithoutHouseholdInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutHouseholdInput | CategoryUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: CategoryCreateManyHouseholdInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutHouseholdInput | CategoryUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutHouseholdInput | CategoryUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput> | HouseholdMemberCreateWithoutHouseholdInput[] | HouseholdMemberUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdMemberCreateOrConnectWithoutHouseholdInput | HouseholdMemberCreateOrConnectWithoutHouseholdInput[]
    upsert?: HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput | HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: HouseholdMemberCreateManyHouseholdInputEnvelope
    set?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    disconnect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    delete?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    connect?: HouseholdMemberWhereUniqueInput | HouseholdMemberWhereUniqueInput[]
    update?: HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput | HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput | HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
  }

  export type HouseholdInvitationUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<HouseholdInvitationCreateWithoutHouseholdInput, HouseholdInvitationUncheckedCreateWithoutHouseholdInput> | HouseholdInvitationCreateWithoutHouseholdInput[] | HouseholdInvitationUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdInvitationCreateOrConnectWithoutHouseholdInput | HouseholdInvitationCreateOrConnectWithoutHouseholdInput[]
    upsert?: HouseholdInvitationUpsertWithWhereUniqueWithoutHouseholdInput | HouseholdInvitationUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: HouseholdInvitationCreateManyHouseholdInputEnvelope
    set?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    disconnect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    delete?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    connect?: HouseholdInvitationWhereUniqueInput | HouseholdInvitationWhereUniqueInput[]
    update?: HouseholdInvitationUpdateWithWhereUniqueWithoutHouseholdInput | HouseholdInvitationUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: HouseholdInvitationUpdateManyWithWhereWithoutHouseholdInput | HouseholdInvitationUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: HouseholdInvitationScalarWhereInput | HouseholdInvitationScalarWhereInput[]
  }

  export type HouseholdJoinRequestUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<HouseholdJoinRequestCreateWithoutHouseholdInput, HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput> | HouseholdJoinRequestCreateWithoutHouseholdInput[] | HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput | HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput[]
    upsert?: HouseholdJoinRequestUpsertWithWhereUniqueWithoutHouseholdInput | HouseholdJoinRequestUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: HouseholdJoinRequestCreateManyHouseholdInputEnvelope
    set?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    disconnect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    delete?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    connect?: HouseholdJoinRequestWhereUniqueInput | HouseholdJoinRequestWhereUniqueInput[]
    update?: HouseholdJoinRequestUpdateWithWhereUniqueWithoutHouseholdInput | HouseholdJoinRequestUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: HouseholdJoinRequestUpdateManyWithWhereWithoutHouseholdInput | HouseholdJoinRequestUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: HouseholdJoinRequestScalarWhereInput | HouseholdJoinRequestScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutHouseholdNestedInput = {
    create?: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput> | CategoryCreateWithoutHouseholdInput[] | CategoryUncheckedCreateWithoutHouseholdInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutHouseholdInput | CategoryCreateOrConnectWithoutHouseholdInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutHouseholdInput | CategoryUpsertWithWhereUniqueWithoutHouseholdInput[]
    createMany?: CategoryCreateManyHouseholdInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutHouseholdInput | CategoryUpdateWithWhereUniqueWithoutHouseholdInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutHouseholdInput | CategoryUpdateManyWithWhereWithoutHouseholdInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type HouseholdCreateNestedOneWithoutMembersInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput
    connect?: HouseholdWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type HouseholdUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutMembersInput
    upsert?: HouseholdUpsertWithoutMembersInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutMembersInput, HouseholdUpdateWithoutMembersInput>, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type HouseholdCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<HouseholdCreateWithoutInvitationsInput, HouseholdUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutInvitationsInput
    connect?: HouseholdWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus
  }

  export type HouseholdUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<HouseholdCreateWithoutInvitationsInput, HouseholdUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutInvitationsInput
    upsert?: HouseholdUpsertWithoutInvitationsInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutInvitationsInput, HouseholdUpdateWithoutInvitationsInput>, HouseholdUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    upsert?: UserUpsertWithoutInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsInput, UserUpdateWithoutInvitationsInput>, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type HouseholdCreateNestedOneWithoutHouseholdJoinRequestsInput = {
    create?: XOR<HouseholdCreateWithoutHouseholdJoinRequestsInput, HouseholdUncheckedCreateWithoutHouseholdJoinRequestsInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutHouseholdJoinRequestsInput
    connect?: HouseholdWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumJoinRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.JoinRequestStatus
  }

  export type HouseholdUpdateOneRequiredWithoutHouseholdJoinRequestsNestedInput = {
    create?: XOR<HouseholdCreateWithoutHouseholdJoinRequestsInput, HouseholdUncheckedCreateWithoutHouseholdJoinRequestsInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutHouseholdJoinRequestsInput
    upsert?: HouseholdUpsertWithoutHouseholdJoinRequestsInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutHouseholdJoinRequestsInput, HouseholdUpdateWithoutHouseholdJoinRequestsInput>, HouseholdUncheckedUpdateWithoutHouseholdJoinRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type HouseholdCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<HouseholdCreateWithoutCategoriesInput, HouseholdUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutCategoriesInput
    connect?: HouseholdWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput> | ItemCreateWithoutCategoryInput[] | ItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput | ItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ItemCreateManyCategoryInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput> | ItemCreateWithoutCategoryInput[] | ItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput | ItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ItemCreateManyCategoryInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type HouseholdUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<HouseholdCreateWithoutCategoriesInput, HouseholdUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: HouseholdCreateOrConnectWithoutCategoriesInput
    upsert?: HouseholdUpsertWithoutCategoriesInput
    connect?: HouseholdWhereUniqueInput
    update?: XOR<XOR<HouseholdUpdateToOneWithWhereWithoutCategoriesInput, HouseholdUpdateWithoutCategoriesInput>, HouseholdUncheckedUpdateWithoutCategoriesInput>
  }

  export type ItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput> | ItemCreateWithoutCategoryInput[] | ItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput | ItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCategoryInput | ItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ItemCreateManyCategoryInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCategoryInput | ItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCategoryInput | ItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput> | ItemCreateWithoutCategoryInput[] | ItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoryInput | ItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCategoryInput | ItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ItemCreateManyCategoryInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCategoryInput | ItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCategoryInput | ItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemScheduleCreateNestedOneWithoutItemInput = {
    create?: XOR<ItemScheduleCreateWithoutItemInput, ItemScheduleUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemScheduleCreateOrConnectWithoutItemInput
    connect?: ItemScheduleWhereUniqueInput
  }

  export type ItemHistoryCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput> | ItemHistoryCreateWithoutItemInput[] | ItemHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutItemInput | ItemHistoryCreateOrConnectWithoutItemInput[]
    createMany?: ItemHistoryCreateManyItemInputEnvelope
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutItemInput = {
    create?: XOR<ReminderCreateWithoutItemInput, ReminderUncheckedCreateWithoutItemInput> | ReminderCreateWithoutItemInput[] | ReminderUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutItemInput | ReminderCreateOrConnectWithoutItemInput[]
    createMany?: ReminderCreateManyItemInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type ItemScheduleUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<ItemScheduleCreateWithoutItemInput, ItemScheduleUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemScheduleCreateOrConnectWithoutItemInput
    connect?: ItemScheduleWhereUniqueInput
  }

  export type ItemHistoryUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput> | ItemHistoryCreateWithoutItemInput[] | ItemHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutItemInput | ItemHistoryCreateOrConnectWithoutItemInput[]
    createMany?: ItemHistoryCreateManyItemInputEnvelope
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ReminderCreateWithoutItemInput, ReminderUncheckedCreateWithoutItemInput> | ReminderCreateWithoutItemInput[] | ReminderUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutItemInput | ReminderCreateOrConnectWithoutItemInput[]
    createMany?: ReminderCreateManyItemInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type EnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType
  }

  export type CategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutItemsInput
    upsert?: CategoryUpsertWithoutItemsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutItemsInput, CategoryUpdateWithoutItemsInput>, CategoryUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type ItemScheduleUpdateOneWithoutItemNestedInput = {
    create?: XOR<ItemScheduleCreateWithoutItemInput, ItemScheduleUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemScheduleCreateOrConnectWithoutItemInput
    upsert?: ItemScheduleUpsertWithoutItemInput
    disconnect?: ItemScheduleWhereInput | boolean
    delete?: ItemScheduleWhereInput | boolean
    connect?: ItemScheduleWhereUniqueInput
    update?: XOR<XOR<ItemScheduleUpdateToOneWithWhereWithoutItemInput, ItemScheduleUpdateWithoutItemInput>, ItemScheduleUncheckedUpdateWithoutItemInput>
  }

  export type ItemHistoryUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput> | ItemHistoryCreateWithoutItemInput[] | ItemHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutItemInput | ItemHistoryCreateOrConnectWithoutItemInput[]
    upsert?: ItemHistoryUpsertWithWhereUniqueWithoutItemInput | ItemHistoryUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemHistoryCreateManyItemInputEnvelope
    set?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    disconnect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    delete?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    update?: ItemHistoryUpdateWithWhereUniqueWithoutItemInput | ItemHistoryUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemHistoryUpdateManyWithWhereWithoutItemInput | ItemHistoryUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutItemNestedInput = {
    create?: XOR<ReminderCreateWithoutItemInput, ReminderUncheckedCreateWithoutItemInput> | ReminderCreateWithoutItemInput[] | ReminderUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutItemInput | ReminderCreateOrConnectWithoutItemInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutItemInput | ReminderUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ReminderCreateManyItemInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutItemInput | ReminderUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutItemInput | ReminderUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ItemScheduleUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<ItemScheduleCreateWithoutItemInput, ItemScheduleUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemScheduleCreateOrConnectWithoutItemInput
    upsert?: ItemScheduleUpsertWithoutItemInput
    disconnect?: ItemScheduleWhereInput | boolean
    delete?: ItemScheduleWhereInput | boolean
    connect?: ItemScheduleWhereUniqueInput
    update?: XOR<XOR<ItemScheduleUpdateToOneWithWhereWithoutItemInput, ItemScheduleUpdateWithoutItemInput>, ItemScheduleUncheckedUpdateWithoutItemInput>
  }

  export type ItemHistoryUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput> | ItemHistoryCreateWithoutItemInput[] | ItemHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutItemInput | ItemHistoryCreateOrConnectWithoutItemInput[]
    upsert?: ItemHistoryUpsertWithWhereUniqueWithoutItemInput | ItemHistoryUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemHistoryCreateManyItemInputEnvelope
    set?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    disconnect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    delete?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    update?: ItemHistoryUpdateWithWhereUniqueWithoutItemInput | ItemHistoryUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemHistoryUpdateManyWithWhereWithoutItemInput | ItemHistoryUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ReminderCreateWithoutItemInput, ReminderUncheckedCreateWithoutItemInput> | ReminderCreateWithoutItemInput[] | ReminderUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutItemInput | ReminderCreateOrConnectWithoutItemInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutItemInput | ReminderUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ReminderCreateManyItemInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutItemInput | ReminderUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutItemInput | ReminderUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutScheduleInput = {
    create?: XOR<ItemCreateWithoutScheduleInput, ItemUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: ItemCreateOrConnectWithoutScheduleInput
    connect?: ItemWhereUniqueInput
  }

  export type EnumTrackingModeFieldUpdateOperationsInput = {
    set?: $Enums.TrackingMode
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<ItemCreateWithoutScheduleInput, ItemUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: ItemCreateOrConnectWithoutScheduleInput
    upsert?: ItemUpsertWithoutScheduleInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutScheduleInput, ItemUpdateWithoutScheduleInput>, ItemUncheckedUpdateWithoutScheduleInput>
  }

  export type ItemCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<ItemCreateWithoutHistoriesInput, ItemUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutHistoriesInput
    connect?: ItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutItemHistoriesInput = {
    create?: XOR<UserCreateWithoutItemHistoriesInput, UserUncheckedCreateWithoutItemHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<ItemCreateWithoutHistoriesInput, ItemUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutHistoriesInput
    upsert?: ItemUpsertWithoutHistoriesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutHistoriesInput, ItemUpdateWithoutHistoriesInput>, ItemUncheckedUpdateWithoutHistoriesInput>
  }

  export type UserUpdateOneRequiredWithoutItemHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutItemHistoriesInput, UserUncheckedCreateWithoutItemHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemHistoriesInput
    upsert?: UserUpsertWithoutItemHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemHistoriesInput, UserUpdateWithoutItemHistoriesInput>, UserUncheckedUpdateWithoutItemHistoriesInput>
  }

  export type ItemCreateNestedOneWithoutRemindersInput = {
    create?: XOR<ItemCreateWithoutRemindersInput, ItemUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRemindersInput
    connect?: ItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRemindersInput = {
    create?: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemindersInput
    connect?: UserWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<ItemCreateWithoutRemindersInput, ItemUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRemindersInput
    upsert?: ItemUpsertWithoutRemindersInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutRemindersInput, ItemUpdateWithoutRemindersInput>, ItemUncheckedUpdateWithoutRemindersInput>
  }

  export type UserUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemindersInput
    upsert?: UserUpsertWithoutRemindersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRemindersInput, UserUpdateWithoutRemindersInput>, UserUncheckedUpdateWithoutRemindersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type NestedEnumJoinRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | EnumJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinRequestStatusFilter<$PrismaModel> | $Enums.JoinRequestStatus
  }

  export type NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JoinRequestStatus | EnumJoinRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JoinRequestStatus[] | ListEnumJoinRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJoinRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.JoinRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJoinRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumJoinRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type NestedEnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type NestedEnumTrackingModeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrackingMode | EnumTrackingModeFieldRefInput<$PrismaModel>
    in?: $Enums.TrackingMode[] | ListEnumTrackingModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrackingMode[] | ListEnumTrackingModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrackingModeFilter<$PrismaModel> | $Enums.TrackingMode
  }

  export type NestedEnumTrackingModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrackingMode | EnumTrackingModeFieldRefInput<$PrismaModel>
    in?: $Enums.TrackingMode[] | ListEnumTrackingModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrackingMode[] | ListEnumTrackingModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrackingModeWithAggregatesFilter<$PrismaModel> | $Enums.TrackingMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrackingModeFilter<$PrismaModel>
    _max?: NestedEnumTrackingModeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HouseholdCreateWithoutCreatorInput = {
    household_id?: string
    name: string
    updated_at?: Date | string
    members?: HouseholdMemberCreateNestedManyWithoutHouseholdInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestCreateNestedManyWithoutHouseholdInput
    categories?: CategoryCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutCreatorInput = {
    household_id?: string
    name: string
    updated_at?: Date | string
    members?: HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutHouseholdInput
    categories?: CategoryUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutCreatorInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutCreatorInput, HouseholdUncheckedCreateWithoutCreatorInput>
  }

  export type HouseholdCreateManyCreatorInputEnvelope = {
    data: HouseholdCreateManyCreatorInput | HouseholdCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdMemberCreateWithoutUserInput = {
    role: $Enums.Role
    household: HouseholdCreateNestedOneWithoutMembersInput
  }

  export type HouseholdMemberUncheckedCreateWithoutUserInput = {
    household_id: string
    role: $Enums.Role
  }

  export type HouseholdMemberCreateOrConnectWithoutUserInput = {
    where: HouseholdMemberWhereUniqueInput
    create: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput>
  }

  export type HouseholdMemberCreateManyUserInputEnvelope = {
    data: HouseholdMemberCreateManyUserInput | HouseholdMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdInvitationCreateWithoutInviterInput = {
    invitation_id?: string
    code: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
    household: HouseholdCreateNestedOneWithoutInvitationsInput
  }

  export type HouseholdInvitationUncheckedCreateWithoutInviterInput = {
    invitation_id?: string
    household_id: string
    code: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
  }

  export type HouseholdInvitationCreateOrConnectWithoutInviterInput = {
    where: HouseholdInvitationWhereUniqueInput
    create: XOR<HouseholdInvitationCreateWithoutInviterInput, HouseholdInvitationUncheckedCreateWithoutInviterInput>
  }

  export type HouseholdInvitationCreateManyInviterInputEnvelope = {
    data: HouseholdInvitationCreateManyInviterInput | HouseholdInvitationCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdJoinRequestCreateWithoutRequesterInput = {
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
    household: HouseholdCreateNestedOneWithoutHouseholdJoinRequestsInput
  }

  export type HouseholdJoinRequestUncheckedCreateWithoutRequesterInput = {
    household_id: string
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
  }

  export type HouseholdJoinRequestCreateOrConnectWithoutRequesterInput = {
    where: HouseholdJoinRequestWhereUniqueInput
    create: XOR<HouseholdJoinRequestCreateWithoutRequesterInput, HouseholdJoinRequestUncheckedCreateWithoutRequesterInput>
  }

  export type HouseholdJoinRequestCreateManyRequesterInputEnvelope = {
    data: HouseholdJoinRequestCreateManyRequesterInput | HouseholdJoinRequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutCreatorInput = {
    item_id?: string
    name: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutItemsInput
    schedule?: ItemScheduleCreateNestedOneWithoutItemInput
    histories?: ItemHistoryCreateNestedManyWithoutItemInput
    reminders?: ReminderCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCreatorInput = {
    item_id?: string
    name: string
    category_id: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    schedule?: ItemScheduleUncheckedCreateNestedOneWithoutItemInput
    histories?: ItemHistoryUncheckedCreateNestedManyWithoutItemInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCreatorInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCreatorInput, ItemUncheckedCreateWithoutCreatorInput>
  }

  export type ItemCreateManyCreatorInputEnvelope = {
    data: ItemCreateManyCreatorInput | ItemCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ItemHistoryCreateWithoutCompleterInput = {
    history_id?: string
    completed_at?: Date | string
    notes?: string | null
    item: ItemCreateNestedOneWithoutHistoriesInput
  }

  export type ItemHistoryUncheckedCreateWithoutCompleterInput = {
    history_id?: string
    item_id: string
    completed_at?: Date | string
    notes?: string | null
  }

  export type ItemHistoryCreateOrConnectWithoutCompleterInput = {
    where: ItemHistoryWhereUniqueInput
    create: XOR<ItemHistoryCreateWithoutCompleterInput, ItemHistoryUncheckedCreateWithoutCompleterInput>
  }

  export type ItemHistoryCreateManyCompleterInputEnvelope = {
    data: ItemHistoryCreateManyCompleterInput | ItemHistoryCreateManyCompleterInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutUserInput = {
    reminder_id?: string
    remind_at: Date | string
    item: ItemCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutUserInput = {
    reminder_id?: string
    item_id: string
    remind_at: Date | string
  }

  export type ReminderCreateOrConnectWithoutUserInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderCreateManyUserInputEnvelope = {
    data: ReminderCreateManyUserInput | ReminderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    token_id?: string
    token_hash: string
    device_info?: string | null
    created_at?: Date | string
    expires_at: Date | string
    revoked_at?: Date | string | null
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    token_id?: string
    token_hash: string
    device_info?: string | null
    created_at?: Date | string
    expires_at: Date | string
    revoked_at?: Date | string | null
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdUpsertWithWhereUniqueWithoutCreatorInput = {
    where: HouseholdWhereUniqueInput
    update: XOR<HouseholdUpdateWithoutCreatorInput, HouseholdUncheckedUpdateWithoutCreatorInput>
    create: XOR<HouseholdCreateWithoutCreatorInput, HouseholdUncheckedCreateWithoutCreatorInput>
  }

  export type HouseholdUpdateWithWhereUniqueWithoutCreatorInput = {
    where: HouseholdWhereUniqueInput
    data: XOR<HouseholdUpdateWithoutCreatorInput, HouseholdUncheckedUpdateWithoutCreatorInput>
  }

  export type HouseholdUpdateManyWithWhereWithoutCreatorInput = {
    where: HouseholdScalarWhereInput
    data: XOR<HouseholdUpdateManyMutationInput, HouseholdUncheckedUpdateManyWithoutCreatorInput>
  }

  export type HouseholdScalarWhereInput = {
    AND?: HouseholdScalarWhereInput | HouseholdScalarWhereInput[]
    OR?: HouseholdScalarWhereInput[]
    NOT?: HouseholdScalarWhereInput | HouseholdScalarWhereInput[]
    household_id?: StringFilter<"Household"> | string
    name?: StringFilter<"Household"> | string
    created_by?: StringFilter<"Household"> | string
    updated_at?: DateTimeFilter<"Household"> | Date | string
  }

  export type HouseholdMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: HouseholdMemberWhereUniqueInput
    update: XOR<HouseholdMemberUpdateWithoutUserInput, HouseholdMemberUncheckedUpdateWithoutUserInput>
    create: XOR<HouseholdMemberCreateWithoutUserInput, HouseholdMemberUncheckedCreateWithoutUserInput>
  }

  export type HouseholdMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: HouseholdMemberWhereUniqueInput
    data: XOR<HouseholdMemberUpdateWithoutUserInput, HouseholdMemberUncheckedUpdateWithoutUserInput>
  }

  export type HouseholdMemberUpdateManyWithWhereWithoutUserInput = {
    where: HouseholdMemberScalarWhereInput
    data: XOR<HouseholdMemberUpdateManyMutationInput, HouseholdMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type HouseholdMemberScalarWhereInput = {
    AND?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
    OR?: HouseholdMemberScalarWhereInput[]
    NOT?: HouseholdMemberScalarWhereInput | HouseholdMemberScalarWhereInput[]
    household_id?: StringFilter<"HouseholdMember"> | string
    user_id?: StringFilter<"HouseholdMember"> | string
    role?: EnumRoleFilter<"HouseholdMember"> | $Enums.Role
  }

  export type HouseholdInvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: HouseholdInvitationWhereUniqueInput
    update: XOR<HouseholdInvitationUpdateWithoutInviterInput, HouseholdInvitationUncheckedUpdateWithoutInviterInput>
    create: XOR<HouseholdInvitationCreateWithoutInviterInput, HouseholdInvitationUncheckedCreateWithoutInviterInput>
  }

  export type HouseholdInvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: HouseholdInvitationWhereUniqueInput
    data: XOR<HouseholdInvitationUpdateWithoutInviterInput, HouseholdInvitationUncheckedUpdateWithoutInviterInput>
  }

  export type HouseholdInvitationUpdateManyWithWhereWithoutInviterInput = {
    where: HouseholdInvitationScalarWhereInput
    data: XOR<HouseholdInvitationUpdateManyMutationInput, HouseholdInvitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type HouseholdInvitationScalarWhereInput = {
    AND?: HouseholdInvitationScalarWhereInput | HouseholdInvitationScalarWhereInput[]
    OR?: HouseholdInvitationScalarWhereInput[]
    NOT?: HouseholdInvitationScalarWhereInput | HouseholdInvitationScalarWhereInput[]
    invitation_id?: StringFilter<"HouseholdInvitation"> | string
    household_id?: StringFilter<"HouseholdInvitation"> | string
    code?: StringFilter<"HouseholdInvitation"> | string
    invited_by?: StringFilter<"HouseholdInvitation"> | string
    email?: StringFilter<"HouseholdInvitation"> | string
    created_at?: DateTimeFilter<"HouseholdInvitation"> | Date | string
    expires_at?: DateTimeFilter<"HouseholdInvitation"> | Date | string
    status?: EnumInvitationStatusFilter<"HouseholdInvitation"> | $Enums.InvitationStatus
  }

  export type HouseholdJoinRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: HouseholdJoinRequestWhereUniqueInput
    update: XOR<HouseholdJoinRequestUpdateWithoutRequesterInput, HouseholdJoinRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<HouseholdJoinRequestCreateWithoutRequesterInput, HouseholdJoinRequestUncheckedCreateWithoutRequesterInput>
  }

  export type HouseholdJoinRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: HouseholdJoinRequestWhereUniqueInput
    data: XOR<HouseholdJoinRequestUpdateWithoutRequesterInput, HouseholdJoinRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type HouseholdJoinRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: HouseholdJoinRequestScalarWhereInput
    data: XOR<HouseholdJoinRequestUpdateManyMutationInput, HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type HouseholdJoinRequestScalarWhereInput = {
    AND?: HouseholdJoinRequestScalarWhereInput | HouseholdJoinRequestScalarWhereInput[]
    OR?: HouseholdJoinRequestScalarWhereInput[]
    NOT?: HouseholdJoinRequestScalarWhereInput | HouseholdJoinRequestScalarWhereInput[]
    household_id?: StringFilter<"HouseholdJoinRequest"> | string
    requested_by?: StringFilter<"HouseholdJoinRequest"> | string
    status?: EnumJoinRequestStatusFilter<"HouseholdJoinRequest"> | $Enums.JoinRequestStatus
    created_at?: DateTimeFilter<"HouseholdJoinRequest"> | Date | string
  }

  export type ItemUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCreatorInput, ItemUncheckedUpdateWithoutCreatorInput>
    create: XOR<ItemCreateWithoutCreatorInput, ItemUncheckedCreateWithoutCreatorInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCreatorInput, ItemUncheckedUpdateWithoutCreatorInput>
  }

  export type ItemUpdateManyWithWhereWithoutCreatorInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    item_id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    category_id?: StringFilter<"Item"> | string
    icon?: StringNullableFilter<"Item"> | string | null
    item_type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    notes?: StringNullableFilter<"Item"> | string | null
    purchase_link?: StringNullableFilter<"Item"> | string | null
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    created_by?: StringFilter<"Item"> | string
  }

  export type ItemHistoryUpsertWithWhereUniqueWithoutCompleterInput = {
    where: ItemHistoryWhereUniqueInput
    update: XOR<ItemHistoryUpdateWithoutCompleterInput, ItemHistoryUncheckedUpdateWithoutCompleterInput>
    create: XOR<ItemHistoryCreateWithoutCompleterInput, ItemHistoryUncheckedCreateWithoutCompleterInput>
  }

  export type ItemHistoryUpdateWithWhereUniqueWithoutCompleterInput = {
    where: ItemHistoryWhereUniqueInput
    data: XOR<ItemHistoryUpdateWithoutCompleterInput, ItemHistoryUncheckedUpdateWithoutCompleterInput>
  }

  export type ItemHistoryUpdateManyWithWhereWithoutCompleterInput = {
    where: ItemHistoryScalarWhereInput
    data: XOR<ItemHistoryUpdateManyMutationInput, ItemHistoryUncheckedUpdateManyWithoutCompleterInput>
  }

  export type ItemHistoryScalarWhereInput = {
    AND?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
    OR?: ItemHistoryScalarWhereInput[]
    NOT?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
    history_id?: StringFilter<"ItemHistory"> | string
    item_id?: StringFilter<"ItemHistory"> | string
    completed_at?: DateTimeFilter<"ItemHistory"> | Date | string
    completed_by?: StringFilter<"ItemHistory"> | string
    notes?: StringNullableFilter<"ItemHistory"> | string | null
  }

  export type ReminderUpsertWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
  }

  export type ReminderUpdateManyWithWhereWithoutUserInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutUserInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    reminder_id?: StringFilter<"Reminder"> | string
    item_id?: StringFilter<"Reminder"> | string
    user_id?: StringFilter<"Reminder"> | string
    remind_at?: DateTimeFilter<"Reminder"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    token_id?: StringFilter<"RefreshToken"> | string
    user_id?: StringFilter<"RefreshToken"> | string
    token_hash?: StringFilter<"RefreshToken"> | string
    device_info?: StringNullableFilter<"RefreshToken"> | string | null
    created_at?: DateTimeFilter<"RefreshToken"> | Date | string
    expires_at?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked_at?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
  }

  export type UserCreateWithoutRefreshTokensInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestCreateNestedManyWithoutRequesterInput
    items?: ItemCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryCreateNestedManyWithoutCompleterInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput
    items?: ItemUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCreatedHouseholdsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    memberships?: HouseholdMemberCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestCreateNestedManyWithoutRequesterInput
    items?: ItemCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryCreateNestedManyWithoutCompleterInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedHouseholdsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    memberships?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedHouseholdsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedHouseholdsInput, UserUncheckedCreateWithoutCreatedHouseholdsInput>
  }

  export type HouseholdMemberCreateWithoutHouseholdInput = {
    role: $Enums.Role
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type HouseholdMemberUncheckedCreateWithoutHouseholdInput = {
    user_id: string
    role: $Enums.Role
  }

  export type HouseholdMemberCreateOrConnectWithoutHouseholdInput = {
    where: HouseholdMemberWhereUniqueInput
    create: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput>
  }

  export type HouseholdMemberCreateManyHouseholdInputEnvelope = {
    data: HouseholdMemberCreateManyHouseholdInput | HouseholdMemberCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdInvitationCreateWithoutHouseholdInput = {
    invitation_id?: string
    code: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
    inviter: UserCreateNestedOneWithoutInvitationsInput
  }

  export type HouseholdInvitationUncheckedCreateWithoutHouseholdInput = {
    invitation_id?: string
    code: string
    invited_by: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
  }

  export type HouseholdInvitationCreateOrConnectWithoutHouseholdInput = {
    where: HouseholdInvitationWhereUniqueInput
    create: XOR<HouseholdInvitationCreateWithoutHouseholdInput, HouseholdInvitationUncheckedCreateWithoutHouseholdInput>
  }

  export type HouseholdInvitationCreateManyHouseholdInputEnvelope = {
    data: HouseholdInvitationCreateManyHouseholdInput | HouseholdInvitationCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdJoinRequestCreateWithoutHouseholdInput = {
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
    requester: UserCreateNestedOneWithoutRequestsInput
  }

  export type HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput = {
    requested_by: string
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
  }

  export type HouseholdJoinRequestCreateOrConnectWithoutHouseholdInput = {
    where: HouseholdJoinRequestWhereUniqueInput
    create: XOR<HouseholdJoinRequestCreateWithoutHouseholdInput, HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput>
  }

  export type HouseholdJoinRequestCreateManyHouseholdInputEnvelope = {
    data: HouseholdJoinRequestCreateManyHouseholdInput | HouseholdJoinRequestCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutHouseholdInput = {
    category_id?: string
    name: string
    description?: string | null
    icon?: string | null
    color?: string | null
    items?: ItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutHouseholdInput = {
    category_id?: string
    name: string
    description?: string | null
    icon?: string | null
    color?: string | null
    items?: ItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutHouseholdInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput>
  }

  export type CategoryCreateManyHouseholdInputEnvelope = {
    data: CategoryCreateManyHouseholdInput | CategoryCreateManyHouseholdInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedHouseholdsInput = {
    update: XOR<UserUpdateWithoutCreatedHouseholdsInput, UserUncheckedUpdateWithoutCreatedHouseholdsInput>
    create: XOR<UserCreateWithoutCreatedHouseholdsInput, UserUncheckedCreateWithoutCreatedHouseholdsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedHouseholdsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedHouseholdsInput, UserUncheckedUpdateWithoutCreatedHouseholdsInput>
  }

  export type UserUpdateWithoutCreatedHouseholdsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: HouseholdMemberUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput
    items?: ItemUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedHouseholdsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: HouseholdMemberWhereUniqueInput
    update: XOR<HouseholdMemberUpdateWithoutHouseholdInput, HouseholdMemberUncheckedUpdateWithoutHouseholdInput>
    create: XOR<HouseholdMemberCreateWithoutHouseholdInput, HouseholdMemberUncheckedCreateWithoutHouseholdInput>
  }

  export type HouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: HouseholdMemberWhereUniqueInput
    data: XOR<HouseholdMemberUpdateWithoutHouseholdInput, HouseholdMemberUncheckedUpdateWithoutHouseholdInput>
  }

  export type HouseholdMemberUpdateManyWithWhereWithoutHouseholdInput = {
    where: HouseholdMemberScalarWhereInput
    data: XOR<HouseholdMemberUpdateManyMutationInput, HouseholdMemberUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type HouseholdInvitationUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: HouseholdInvitationWhereUniqueInput
    update: XOR<HouseholdInvitationUpdateWithoutHouseholdInput, HouseholdInvitationUncheckedUpdateWithoutHouseholdInput>
    create: XOR<HouseholdInvitationCreateWithoutHouseholdInput, HouseholdInvitationUncheckedCreateWithoutHouseholdInput>
  }

  export type HouseholdInvitationUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: HouseholdInvitationWhereUniqueInput
    data: XOR<HouseholdInvitationUpdateWithoutHouseholdInput, HouseholdInvitationUncheckedUpdateWithoutHouseholdInput>
  }

  export type HouseholdInvitationUpdateManyWithWhereWithoutHouseholdInput = {
    where: HouseholdInvitationScalarWhereInput
    data: XOR<HouseholdInvitationUpdateManyMutationInput, HouseholdInvitationUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type HouseholdJoinRequestUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: HouseholdJoinRequestWhereUniqueInput
    update: XOR<HouseholdJoinRequestUpdateWithoutHouseholdInput, HouseholdJoinRequestUncheckedUpdateWithoutHouseholdInput>
    create: XOR<HouseholdJoinRequestCreateWithoutHouseholdInput, HouseholdJoinRequestUncheckedCreateWithoutHouseholdInput>
  }

  export type HouseholdJoinRequestUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: HouseholdJoinRequestWhereUniqueInput
    data: XOR<HouseholdJoinRequestUpdateWithoutHouseholdInput, HouseholdJoinRequestUncheckedUpdateWithoutHouseholdInput>
  }

  export type HouseholdJoinRequestUpdateManyWithWhereWithoutHouseholdInput = {
    where: HouseholdJoinRequestScalarWhereInput
    data: XOR<HouseholdJoinRequestUpdateManyMutationInput, HouseholdJoinRequestUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutHouseholdInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutHouseholdInput, CategoryUncheckedUpdateWithoutHouseholdInput>
    create: XOR<CategoryCreateWithoutHouseholdInput, CategoryUncheckedCreateWithoutHouseholdInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutHouseholdInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutHouseholdInput, CategoryUncheckedUpdateWithoutHouseholdInput>
  }

  export type CategoryUpdateManyWithWhereWithoutHouseholdInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutHouseholdInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    category_id?: StringFilter<"Category"> | string
    household_id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    color?: StringNullableFilter<"Category"> | string | null
  }

  export type HouseholdCreateWithoutMembersInput = {
    household_id?: string
    name: string
    updated_at?: Date | string
    creator: UserCreateNestedOneWithoutCreatedHouseholdsInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestCreateNestedManyWithoutHouseholdInput
    categories?: CategoryCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutMembersInput = {
    household_id?: string
    name: string
    created_by: string
    updated_at?: Date | string
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutHouseholdInput
    categories?: CategoryUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutMembersInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdCreateNestedManyWithoutCreatorInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestCreateNestedManyWithoutRequesterInput
    items?: ItemCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryCreateNestedManyWithoutCompleterInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdUncheckedCreateNestedManyWithoutCreatorInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type HouseholdUpsertWithoutMembersInput = {
    update: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
    create: XOR<HouseholdCreateWithoutMembersInput, HouseholdUncheckedCreateWithoutMembersInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutMembersInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutMembersInput, HouseholdUncheckedUpdateWithoutMembersInput>
  }

  export type HouseholdUpdateWithoutMembersInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedHouseholdsNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutMembersInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUpdateManyWithoutCreatorNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput
    items?: ItemUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUncheckedUpdateManyWithoutCreatorNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HouseholdCreateWithoutInvitationsInput = {
    household_id?: string
    name: string
    updated_at?: Date | string
    creator: UserCreateNestedOneWithoutCreatedHouseholdsInput
    members?: HouseholdMemberCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestCreateNestedManyWithoutHouseholdInput
    categories?: CategoryCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutInvitationsInput = {
    household_id?: string
    name: string
    created_by: string
    updated_at?: Date | string
    members?: HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutHouseholdInput
    categories?: CategoryUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutInvitationsInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutInvitationsInput, HouseholdUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutInvitationsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberCreateNestedManyWithoutUserInput
    requests?: HouseholdJoinRequestCreateNestedManyWithoutRequesterInput
    items?: ItemCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryCreateNestedManyWithoutCompleterInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    requests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type HouseholdUpsertWithoutInvitationsInput = {
    update: XOR<HouseholdUpdateWithoutInvitationsInput, HouseholdUncheckedUpdateWithoutInvitationsInput>
    create: XOR<HouseholdCreateWithoutInvitationsInput, HouseholdUncheckedCreateWithoutInvitationsInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutInvitationsInput, HouseholdUncheckedUpdateWithoutInvitationsInput>
  }

  export type HouseholdUpdateWithoutInvitationsInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedHouseholdsNestedInput
    members?: HouseholdMemberUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutInvitationsInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type UserUpsertWithoutInvitationsInput = {
    update: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateWithoutInvitationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUpdateManyWithoutUserNestedInput
    requests?: HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput
    items?: ItemUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    requests?: HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HouseholdCreateWithoutHouseholdJoinRequestsInput = {
    household_id?: string
    name: string
    updated_at?: Date | string
    creator: UserCreateNestedOneWithoutCreatedHouseholdsInput
    members?: HouseholdMemberCreateNestedManyWithoutHouseholdInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutHouseholdInput
    categories?: CategoryCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutHouseholdJoinRequestsInput = {
    household_id?: string
    name: string
    created_by: string
    updated_at?: Date | string
    members?: HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutHouseholdInput
    categories?: CategoryUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutHouseholdJoinRequestsInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutHouseholdJoinRequestsInput, HouseholdUncheckedCreateWithoutHouseholdJoinRequestsInput>
  }

  export type UserCreateWithoutRequestsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutInviterInput
    items?: ItemCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryCreateNestedManyWithoutCompleterInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type HouseholdUpsertWithoutHouseholdJoinRequestsInput = {
    update: XOR<HouseholdUpdateWithoutHouseholdJoinRequestsInput, HouseholdUncheckedUpdateWithoutHouseholdJoinRequestsInput>
    create: XOR<HouseholdCreateWithoutHouseholdJoinRequestsInput, HouseholdUncheckedCreateWithoutHouseholdJoinRequestsInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutHouseholdJoinRequestsInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutHouseholdJoinRequestsInput, HouseholdUncheckedUpdateWithoutHouseholdJoinRequestsInput>
  }

  export type HouseholdUpdateWithoutHouseholdJoinRequestsInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedHouseholdsNestedInput
    members?: HouseholdMemberUpdateManyWithoutHouseholdNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutHouseholdJoinRequestsInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutInviterNestedInput
    items?: ItemUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HouseholdCreateWithoutCategoriesInput = {
    household_id?: string
    name: string
    updated_at?: Date | string
    creator: UserCreateNestedOneWithoutCreatedHouseholdsInput
    members?: HouseholdMemberCreateNestedManyWithoutHouseholdInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdUncheckedCreateWithoutCategoriesInput = {
    household_id?: string
    name: string
    created_by: string
    updated_at?: Date | string
    members?: HouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutHouseholdInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutHouseholdInput
  }

  export type HouseholdCreateOrConnectWithoutCategoriesInput = {
    where: HouseholdWhereUniqueInput
    create: XOR<HouseholdCreateWithoutCategoriesInput, HouseholdUncheckedCreateWithoutCategoriesInput>
  }

  export type ItemCreateWithoutCategoryInput = {
    item_id?: string
    name: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    creator: UserCreateNestedOneWithoutItemsInput
    schedule?: ItemScheduleCreateNestedOneWithoutItemInput
    histories?: ItemHistoryCreateNestedManyWithoutItemInput
    reminders?: ReminderCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCategoryInput = {
    item_id?: string
    name: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
    schedule?: ItemScheduleUncheckedCreateNestedOneWithoutItemInput
    histories?: ItemHistoryUncheckedCreateNestedManyWithoutItemInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput>
  }

  export type ItemCreateManyCategoryInputEnvelope = {
    data: ItemCreateManyCategoryInput | ItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type HouseholdUpsertWithoutCategoriesInput = {
    update: XOR<HouseholdUpdateWithoutCategoriesInput, HouseholdUncheckedUpdateWithoutCategoriesInput>
    create: XOR<HouseholdCreateWithoutCategoriesInput, HouseholdUncheckedCreateWithoutCategoriesInput>
    where?: HouseholdWhereInput
  }

  export type HouseholdUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: HouseholdWhereInput
    data: XOR<HouseholdUpdateWithoutCategoriesInput, HouseholdUncheckedUpdateWithoutCategoriesInput>
  }

  export type HouseholdUpdateWithoutCategoriesInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedHouseholdsNestedInput
    members?: HouseholdMemberUpdateManyWithoutHouseholdNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutCategoriesInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type ItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCategoryInput, ItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<ItemCreateWithoutCategoryInput, ItemUncheckedCreateWithoutCategoryInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCategoryInput, ItemUncheckedUpdateWithoutCategoryInput>
  }

  export type ItemUpdateManyWithWhereWithoutCategoryInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutItemsInput = {
    category_id?: string
    name: string
    description?: string | null
    icon?: string | null
    color?: string | null
    household: HouseholdCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutItemsInput = {
    category_id?: string
    household_id: string
    name: string
    description?: string | null
    icon?: string | null
    color?: string | null
  }

  export type CategoryCreateOrConnectWithoutItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
  }

  export type UserCreateWithoutItemsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestCreateNestedManyWithoutRequesterInput
    itemHistories?: ItemHistoryCreateNestedManyWithoutCompleterInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    itemHistories?: ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type ItemScheduleCreateWithoutItemInput = {
    tracking_mode: $Enums.TrackingMode
    interval_days?: number | null
    fixed_due_date?: Date | string | null
    recurrence_rule?: string | null
    lead_time_days?: number | null
    last_completed_at?: Date | string | null
    next_due_date: Date | string
    updated_at?: Date | string
  }

  export type ItemScheduleUncheckedCreateWithoutItemInput = {
    tracking_mode: $Enums.TrackingMode
    interval_days?: number | null
    fixed_due_date?: Date | string | null
    recurrence_rule?: string | null
    lead_time_days?: number | null
    last_completed_at?: Date | string | null
    next_due_date: Date | string
    updated_at?: Date | string
  }

  export type ItemScheduleCreateOrConnectWithoutItemInput = {
    where: ItemScheduleWhereUniqueInput
    create: XOR<ItemScheduleCreateWithoutItemInput, ItemScheduleUncheckedCreateWithoutItemInput>
  }

  export type ItemHistoryCreateWithoutItemInput = {
    history_id?: string
    completed_at?: Date | string
    notes?: string | null
    completer: UserCreateNestedOneWithoutItemHistoriesInput
  }

  export type ItemHistoryUncheckedCreateWithoutItemInput = {
    history_id?: string
    completed_at?: Date | string
    completed_by: string
    notes?: string | null
  }

  export type ItemHistoryCreateOrConnectWithoutItemInput = {
    where: ItemHistoryWhereUniqueInput
    create: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput>
  }

  export type ItemHistoryCreateManyItemInputEnvelope = {
    data: ItemHistoryCreateManyItemInput | ItemHistoryCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutItemInput = {
    reminder_id?: string
    remind_at: Date | string
    user: UserCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateWithoutItemInput = {
    reminder_id?: string
    user_id: string
    remind_at: Date | string
  }

  export type ReminderCreateOrConnectWithoutItemInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutItemInput, ReminderUncheckedCreateWithoutItemInput>
  }

  export type ReminderCreateManyItemInputEnvelope = {
    data: ReminderCreateManyItemInput | ReminderCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutItemsInput = {
    update: XOR<CategoryUpdateWithoutItemsInput, CategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<CategoryCreateWithoutItemsInput, CategoryUncheckedCreateWithoutItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutItemsInput, CategoryUncheckedUpdateWithoutItemsInput>
  }

  export type CategoryUpdateWithoutItemsInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    household?: HouseholdUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutItemsInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput
    itemHistories?: ItemHistoryUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    itemHistories?: ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemScheduleUpsertWithoutItemInput = {
    update: XOR<ItemScheduleUpdateWithoutItemInput, ItemScheduleUncheckedUpdateWithoutItemInput>
    create: XOR<ItemScheduleCreateWithoutItemInput, ItemScheduleUncheckedCreateWithoutItemInput>
    where?: ItemScheduleWhereInput
  }

  export type ItemScheduleUpdateToOneWithWhereWithoutItemInput = {
    where?: ItemScheduleWhereInput
    data: XOR<ItemScheduleUpdateWithoutItemInput, ItemScheduleUncheckedUpdateWithoutItemInput>
  }

  export type ItemScheduleUpdateWithoutItemInput = {
    tracking_mode?: EnumTrackingModeFieldUpdateOperationsInput | $Enums.TrackingMode
    interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    fixed_due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_rule?: NullableStringFieldUpdateOperationsInput | string | null
    lead_time_days?: NullableIntFieldUpdateOperationsInput | number | null
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemScheduleUncheckedUpdateWithoutItemInput = {
    tracking_mode?: EnumTrackingModeFieldUpdateOperationsInput | $Enums.TrackingMode
    interval_days?: NullableIntFieldUpdateOperationsInput | number | null
    fixed_due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrence_rule?: NullableStringFieldUpdateOperationsInput | string | null
    lead_time_days?: NullableIntFieldUpdateOperationsInput | number | null
    last_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemHistoryUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemHistoryWhereUniqueInput
    update: XOR<ItemHistoryUpdateWithoutItemInput, ItemHistoryUncheckedUpdateWithoutItemInput>
    create: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput>
  }

  export type ItemHistoryUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemHistoryWhereUniqueInput
    data: XOR<ItemHistoryUpdateWithoutItemInput, ItemHistoryUncheckedUpdateWithoutItemInput>
  }

  export type ItemHistoryUpdateManyWithWhereWithoutItemInput = {
    where: ItemHistoryScalarWhereInput
    data: XOR<ItemHistoryUpdateManyMutationInput, ItemHistoryUncheckedUpdateManyWithoutItemInput>
  }

  export type ReminderUpsertWithWhereUniqueWithoutItemInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutItemInput, ReminderUncheckedUpdateWithoutItemInput>
    create: XOR<ReminderCreateWithoutItemInput, ReminderUncheckedCreateWithoutItemInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutItemInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutItemInput, ReminderUncheckedUpdateWithoutItemInput>
  }

  export type ReminderUpdateManyWithWhereWithoutItemInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemCreateWithoutScheduleInput = {
    item_id?: string
    name: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutItemsInput
    creator: UserCreateNestedOneWithoutItemsInput
    histories?: ItemHistoryCreateNestedManyWithoutItemInput
    reminders?: ReminderCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutScheduleInput = {
    item_id?: string
    name: string
    category_id: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
    histories?: ItemHistoryUncheckedCreateNestedManyWithoutItemInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutScheduleInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutScheduleInput, ItemUncheckedCreateWithoutScheduleInput>
  }

  export type ItemUpsertWithoutScheduleInput = {
    update: XOR<ItemUpdateWithoutScheduleInput, ItemUncheckedUpdateWithoutScheduleInput>
    create: XOR<ItemCreateWithoutScheduleInput, ItemUncheckedCreateWithoutScheduleInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutScheduleInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutScheduleInput, ItemUncheckedUpdateWithoutScheduleInput>
  }

  export type ItemUpdateWithoutScheduleInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    creator?: UserUpdateOneRequiredWithoutItemsNestedInput
    histories?: ItemHistoryUpdateManyWithoutItemNestedInput
    reminders?: ReminderUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutScheduleInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    histories?: ItemHistoryUncheckedUpdateManyWithoutItemNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateWithoutHistoriesInput = {
    item_id?: string
    name: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutItemsInput
    creator: UserCreateNestedOneWithoutItemsInput
    schedule?: ItemScheduleCreateNestedOneWithoutItemInput
    reminders?: ReminderCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutHistoriesInput = {
    item_id?: string
    name: string
    category_id: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
    schedule?: ItemScheduleUncheckedCreateNestedOneWithoutItemInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutHistoriesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutHistoriesInput, ItemUncheckedCreateWithoutHistoriesInput>
  }

  export type UserCreateWithoutItemHistoriesInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestCreateNestedManyWithoutRequesterInput
    items?: ItemCreateNestedManyWithoutCreatorInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemHistoriesInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatorInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemHistoriesInput, UserUncheckedCreateWithoutItemHistoriesInput>
  }

  export type ItemUpsertWithoutHistoriesInput = {
    update: XOR<ItemUpdateWithoutHistoriesInput, ItemUncheckedUpdateWithoutHistoriesInput>
    create: XOR<ItemCreateWithoutHistoriesInput, ItemUncheckedCreateWithoutHistoriesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutHistoriesInput, ItemUncheckedUpdateWithoutHistoriesInput>
  }

  export type ItemUpdateWithoutHistoriesInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    creator?: UserUpdateOneRequiredWithoutItemsNestedInput
    schedule?: ItemScheduleUpdateOneWithoutItemNestedInput
    reminders?: ReminderUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutHistoriesInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    schedule?: ItemScheduleUncheckedUpdateOneWithoutItemNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserUpsertWithoutItemHistoriesInput = {
    update: XOR<UserUpdateWithoutItemHistoriesInput, UserUncheckedUpdateWithoutItemHistoriesInput>
    create: XOR<UserCreateWithoutItemHistoriesInput, UserUncheckedCreateWithoutItemHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemHistoriesInput, UserUncheckedUpdateWithoutItemHistoriesInput>
  }

  export type UserUpdateWithoutItemHistoriesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput
    items?: ItemUpdateManyWithoutCreatorNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemHistoriesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatorNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemCreateWithoutRemindersInput = {
    item_id?: string
    name: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutItemsInput
    creator: UserCreateNestedOneWithoutItemsInput
    schedule?: ItemScheduleCreateNestedOneWithoutItemInput
    histories?: ItemHistoryCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutRemindersInput = {
    item_id?: string
    name: string
    category_id: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
    schedule?: ItemScheduleUncheckedCreateNestedOneWithoutItemInput
    histories?: ItemHistoryUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutRemindersInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutRemindersInput, ItemUncheckedCreateWithoutRemindersInput>
  }

  export type UserCreateWithoutRemindersInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestCreateNestedManyWithoutRequesterInput
    items?: ItemCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryCreateNestedManyWithoutCompleterInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRemindersInput = {
    user_id?: string
    email: string
    email_verified?: boolean
    password_hash?: string | null
    name: string
    updated_at?: Date | string
    createdHouseholds?: HouseholdUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: HouseholdMemberUncheckedCreateNestedManyWithoutUserInput
    invitations?: HouseholdInvitationUncheckedCreateNestedManyWithoutInviterInput
    requests?: HouseholdJoinRequestUncheckedCreateNestedManyWithoutRequesterInput
    items?: ItemUncheckedCreateNestedManyWithoutCreatorInput
    itemHistories?: ItemHistoryUncheckedCreateNestedManyWithoutCompleterInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRemindersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
  }

  export type ItemUpsertWithoutRemindersInput = {
    update: XOR<ItemUpdateWithoutRemindersInput, ItemUncheckedUpdateWithoutRemindersInput>
    create: XOR<ItemCreateWithoutRemindersInput, ItemUncheckedCreateWithoutRemindersInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutRemindersInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutRemindersInput, ItemUncheckedUpdateWithoutRemindersInput>
  }

  export type ItemUpdateWithoutRemindersInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    creator?: UserUpdateOneRequiredWithoutItemsNestedInput
    schedule?: ItemScheduleUpdateOneWithoutItemNestedInput
    histories?: ItemHistoryUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutRemindersInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    schedule?: ItemScheduleUncheckedUpdateOneWithoutItemNestedInput
    histories?: ItemHistoryUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserUpsertWithoutRemindersInput = {
    update: XOR<UserUpdateWithoutRemindersInput, UserUncheckedUpdateWithoutRemindersInput>
    create: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRemindersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRemindersInput, UserUncheckedUpdateWithoutRemindersInput>
  }

  export type UserUpdateWithoutRemindersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUpdateManyWithoutRequesterNestedInput
    items?: ItemUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUpdateManyWithoutCompleterNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRemindersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdHouseholds?: HouseholdUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: HouseholdMemberUncheckedUpdateManyWithoutUserNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutInviterNestedInput
    requests?: HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterNestedInput
    items?: ItemUncheckedUpdateManyWithoutCreatorNestedInput
    itemHistories?: ItemHistoryUncheckedUpdateManyWithoutCompleterNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HouseholdCreateManyCreatorInput = {
    household_id?: string
    name: string
    updated_at?: Date | string
  }

  export type HouseholdMemberCreateManyUserInput = {
    household_id: string
    role: $Enums.Role
  }

  export type HouseholdInvitationCreateManyInviterInput = {
    invitation_id?: string
    household_id: string
    code: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
  }

  export type HouseholdJoinRequestCreateManyRequesterInput = {
    household_id: string
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
  }

  export type ItemCreateManyCreatorInput = {
    item_id?: string
    name: string
    category_id: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemHistoryCreateManyCompleterInput = {
    history_id?: string
    item_id: string
    completed_at?: Date | string
    notes?: string | null
  }

  export type ReminderCreateManyUserInput = {
    reminder_id?: string
    item_id: string
    remind_at: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    token_id?: string
    token_hash: string
    device_info?: string | null
    created_at?: Date | string
    expires_at: Date | string
    revoked_at?: Date | string | null
  }

  export type HouseholdUpdateWithoutCreatorInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: HouseholdMemberUpdateManyWithoutHouseholdNestedInput
    invitations?: HouseholdInvitationUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateWithoutCreatorInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: HouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput
    invitations?: HouseholdInvitationUncheckedUpdateManyWithoutHouseholdNestedInput
    householdJoinRequests?: HouseholdJoinRequestUncheckedUpdateManyWithoutHouseholdNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutHouseholdNestedInput
  }

  export type HouseholdUncheckedUpdateManyWithoutCreatorInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdMemberUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    household?: HouseholdUpdateOneRequiredWithoutMembersNestedInput
  }

  export type HouseholdMemberUncheckedUpdateWithoutUserInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type HouseholdMemberUncheckedUpdateManyWithoutUserInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type HouseholdInvitationUpdateWithoutInviterInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    household?: HouseholdUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type HouseholdInvitationUncheckedUpdateWithoutInviterInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    household_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
  }

  export type HouseholdInvitationUncheckedUpdateManyWithoutInviterInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    household_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
  }

  export type HouseholdJoinRequestUpdateWithoutRequesterInput = {
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    household?: HouseholdUpdateOneRequiredWithoutHouseholdJoinRequestsNestedInput
  }

  export type HouseholdJoinRequestUncheckedUpdateWithoutRequesterInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdJoinRequestUncheckedUpdateManyWithoutRequesterInput = {
    household_id?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpdateWithoutCreatorInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutItemsNestedInput
    schedule?: ItemScheduleUpdateOneWithoutItemNestedInput
    histories?: ItemHistoryUpdateManyWithoutItemNestedInput
    reminders?: ReminderUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutCreatorInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ItemScheduleUncheckedUpdateOneWithoutItemNestedInput
    histories?: ItemHistoryUncheckedUpdateManyWithoutItemNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutCreatorInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemHistoryUpdateWithoutCompleterInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    item?: ItemUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type ItemHistoryUncheckedUpdateWithoutCompleterInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemHistoryUncheckedUpdateManyWithoutCompleterInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderUpdateWithoutUserInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutUserInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyWithoutUserInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    token_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    device_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HouseholdMemberCreateManyHouseholdInput = {
    user_id: string
    role: $Enums.Role
  }

  export type HouseholdInvitationCreateManyHouseholdInput = {
    invitation_id?: string
    code: string
    invited_by: string
    email: string
    created_at?: Date | string
    expires_at: Date | string
    status?: $Enums.InvitationStatus
  }

  export type HouseholdJoinRequestCreateManyHouseholdInput = {
    requested_by: string
    status?: $Enums.JoinRequestStatus
    created_at?: Date | string
  }

  export type CategoryCreateManyHouseholdInput = {
    category_id?: string
    name: string
    description?: string | null
    icon?: string | null
    color?: string | null
  }

  export type HouseholdMemberUpdateWithoutHouseholdInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type HouseholdMemberUncheckedUpdateWithoutHouseholdInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type HouseholdMemberUncheckedUpdateManyWithoutHouseholdInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type HouseholdInvitationUpdateWithoutHouseholdInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    inviter?: UserUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type HouseholdInvitationUncheckedUpdateWithoutHouseholdInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
  }

  export type HouseholdInvitationUncheckedUpdateManyWithoutHouseholdInput = {
    invitation_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    invited_by?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
  }

  export type HouseholdJoinRequestUpdateWithoutHouseholdInput = {
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type HouseholdJoinRequestUncheckedUpdateWithoutHouseholdInput = {
    requested_by?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseholdJoinRequestUncheckedUpdateManyWithoutHouseholdInput = {
    requested_by?: StringFieldUpdateOperationsInput | string
    status?: EnumJoinRequestStatusFieldUpdateOperationsInput | $Enums.JoinRequestStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutHouseholdInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    items?: ItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutHouseholdInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    items?: ItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutHouseholdInput = {
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCreateManyCategoryInput = {
    item_id?: string
    name: string
    icon?: string | null
    item_type: $Enums.ItemType
    notes?: string | null
    purchase_link?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by: string
  }

  export type ItemUpdateWithoutCategoryInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutItemsNestedInput
    schedule?: ItemScheduleUpdateOneWithoutItemNestedInput
    histories?: ItemHistoryUpdateManyWithoutItemNestedInput
    reminders?: ReminderUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutCategoryInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    schedule?: ItemScheduleUncheckedUpdateOneWithoutItemNestedInput
    histories?: ItemHistoryUncheckedUpdateManyWithoutItemNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutCategoryInput = {
    item_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    item_type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    purchase_link?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type ItemHistoryCreateManyItemInput = {
    history_id?: string
    completed_at?: Date | string
    completed_by: string
    notes?: string | null
  }

  export type ReminderCreateManyItemInput = {
    reminder_id?: string
    user_id: string
    remind_at: Date | string
  }

  export type ItemHistoryUpdateWithoutItemInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completer?: UserUpdateOneRequiredWithoutItemHistoriesNestedInput
  }

  export type ItemHistoryUncheckedUpdateWithoutItemInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_by?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemHistoryUncheckedUpdateManyWithoutItemInput = {
    history_id?: StringFieldUpdateOperationsInput | string
    completed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_by?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderUpdateWithoutItemInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateWithoutItemInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyWithoutItemInput = {
    reminder_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    remind_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}