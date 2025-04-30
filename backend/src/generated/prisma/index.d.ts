
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
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model EventType
 * 
 */
export type EventType = $Result.DefaultSelection<Prisma.$EventTypePayload>
/**
 * Model RiskPool
 * 
 */
export type RiskPool = $Result.DefaultSelection<Prisma.$RiskPoolPayload>
/**
 * Model CapitalProvider
 * 
 */
export type CapitalProvider = $Result.DefaultSelection<Prisma.$CapitalProviderPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model OracleSource
 * 
 */
export type OracleSource = $Result.DefaultSelection<Prisma.$OracleSourcePayload>
/**
 * Model OracleData
 * 
 */
export type OracleData = $Result.DefaultSelection<Prisma.$OracleDataPayload>
/**
 * Model PolicyTrigger
 * 
 */
export type PolicyTrigger = $Result.DefaultSelection<Prisma.$PolicyTriggerPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Payout
 * 
 */
export type Payout = $Result.DefaultSelection<Prisma.$PayoutPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs>;

  /**
   * `prisma.eventType`: Exposes CRUD operations for the **EventType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTypes
    * const eventTypes = await prisma.eventType.findMany()
    * ```
    */
  get eventType(): Prisma.EventTypeDelegate<ExtArgs>;

  /**
   * `prisma.riskPool`: Exposes CRUD operations for the **RiskPool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskPools
    * const riskPools = await prisma.riskPool.findMany()
    * ```
    */
  get riskPool(): Prisma.RiskPoolDelegate<ExtArgs>;

  /**
   * `prisma.capitalProvider`: Exposes CRUD operations for the **CapitalProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CapitalProviders
    * const capitalProviders = await prisma.capitalProvider.findMany()
    * ```
    */
  get capitalProvider(): Prisma.CapitalProviderDelegate<ExtArgs>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs>;

  /**
   * `prisma.oracleSource`: Exposes CRUD operations for the **OracleSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OracleSources
    * const oracleSources = await prisma.oracleSource.findMany()
    * ```
    */
  get oracleSource(): Prisma.OracleSourceDelegate<ExtArgs>;

  /**
   * `prisma.oracleData`: Exposes CRUD operations for the **OracleData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OracleData
    * const oracleData = await prisma.oracleData.findMany()
    * ```
    */
  get oracleData(): Prisma.OracleDataDelegate<ExtArgs>;

  /**
   * `prisma.policyTrigger`: Exposes CRUD operations for the **PolicyTrigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicyTriggers
    * const policyTriggers = await prisma.policyTrigger.findMany()
    * ```
    */
  get policyTrigger(): Prisma.PolicyTriggerDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.payout`: Exposes CRUD operations for the **Payout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payouts
    * const payouts = await prisma.payout.findMany()
    * ```
    */
  get payout(): Prisma.PayoutDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Community: 'Community',
    EventType: 'EventType',
    RiskPool: 'RiskPool',
    CapitalProvider: 'CapitalProvider',
    Policy: 'Policy',
    OracleSource: 'OracleSource',
    OracleData: 'OracleData',
    PolicyTrigger: 'PolicyTrigger',
    Payment: 'Payment',
    Payout: 'Payout'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "community" | "eventType" | "riskPool" | "capitalProvider" | "policy" | "oracleSource" | "oracleData" | "policyTrigger" | "payment" | "payout"
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
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      EventType: {
        payload: Prisma.$EventTypePayload<ExtArgs>
        fields: Prisma.EventTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          findFirst: {
            args: Prisma.EventTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          findMany: {
            args: Prisma.EventTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>[]
          }
          create: {
            args: Prisma.EventTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          createMany: {
            args: Prisma.EventTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>[]
          }
          delete: {
            args: Prisma.EventTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          update: {
            args: Prisma.EventTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          deleteMany: {
            args: Prisma.EventTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          aggregate: {
            args: Prisma.EventTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventType>
          }
          groupBy: {
            args: Prisma.EventTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTypeCountArgs<ExtArgs>
            result: $Utils.Optional<EventTypeCountAggregateOutputType> | number
          }
        }
      }
      RiskPool: {
        payload: Prisma.$RiskPoolPayload<ExtArgs>
        fields: Prisma.RiskPoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskPoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskPoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload>
          }
          findFirst: {
            args: Prisma.RiskPoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskPoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload>
          }
          findMany: {
            args: Prisma.RiskPoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload>[]
          }
          create: {
            args: Prisma.RiskPoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload>
          }
          createMany: {
            args: Prisma.RiskPoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskPoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload>[]
          }
          delete: {
            args: Prisma.RiskPoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload>
          }
          update: {
            args: Prisma.RiskPoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload>
          }
          deleteMany: {
            args: Prisma.RiskPoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskPoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RiskPoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPoolPayload>
          }
          aggregate: {
            args: Prisma.RiskPoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskPool>
          }
          groupBy: {
            args: Prisma.RiskPoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskPoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskPoolCountArgs<ExtArgs>
            result: $Utils.Optional<RiskPoolCountAggregateOutputType> | number
          }
        }
      }
      CapitalProvider: {
        payload: Prisma.$CapitalProviderPayload<ExtArgs>
        fields: Prisma.CapitalProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapitalProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapitalProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload>
          }
          findFirst: {
            args: Prisma.CapitalProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapitalProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload>
          }
          findMany: {
            args: Prisma.CapitalProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload>[]
          }
          create: {
            args: Prisma.CapitalProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload>
          }
          createMany: {
            args: Prisma.CapitalProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CapitalProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload>[]
          }
          delete: {
            args: Prisma.CapitalProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload>
          }
          update: {
            args: Prisma.CapitalProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload>
          }
          deleteMany: {
            args: Prisma.CapitalProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapitalProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CapitalProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapitalProviderPayload>
          }
          aggregate: {
            args: Prisma.CapitalProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapitalProvider>
          }
          groupBy: {
            args: Prisma.CapitalProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapitalProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapitalProviderCountArgs<ExtArgs>
            result: $Utils.Optional<CapitalProviderCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      OracleSource: {
        payload: Prisma.$OracleSourcePayload<ExtArgs>
        fields: Prisma.OracleSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OracleSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OracleSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload>
          }
          findFirst: {
            args: Prisma.OracleSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OracleSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload>
          }
          findMany: {
            args: Prisma.OracleSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload>[]
          }
          create: {
            args: Prisma.OracleSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload>
          }
          createMany: {
            args: Prisma.OracleSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OracleSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload>[]
          }
          delete: {
            args: Prisma.OracleSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload>
          }
          update: {
            args: Prisma.OracleSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload>
          }
          deleteMany: {
            args: Prisma.OracleSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OracleSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OracleSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleSourcePayload>
          }
          aggregate: {
            args: Prisma.OracleSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOracleSource>
          }
          groupBy: {
            args: Prisma.OracleSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OracleSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OracleSourceCountArgs<ExtArgs>
            result: $Utils.Optional<OracleSourceCountAggregateOutputType> | number
          }
        }
      }
      OracleData: {
        payload: Prisma.$OracleDataPayload<ExtArgs>
        fields: Prisma.OracleDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OracleDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OracleDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload>
          }
          findFirst: {
            args: Prisma.OracleDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OracleDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload>
          }
          findMany: {
            args: Prisma.OracleDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload>[]
          }
          create: {
            args: Prisma.OracleDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload>
          }
          createMany: {
            args: Prisma.OracleDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OracleDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload>[]
          }
          delete: {
            args: Prisma.OracleDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload>
          }
          update: {
            args: Prisma.OracleDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload>
          }
          deleteMany: {
            args: Prisma.OracleDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OracleDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OracleDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OracleDataPayload>
          }
          aggregate: {
            args: Prisma.OracleDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOracleData>
          }
          groupBy: {
            args: Prisma.OracleDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<OracleDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.OracleDataCountArgs<ExtArgs>
            result: $Utils.Optional<OracleDataCountAggregateOutputType> | number
          }
        }
      }
      PolicyTrigger: {
        payload: Prisma.$PolicyTriggerPayload<ExtArgs>
        fields: Prisma.PolicyTriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyTriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyTriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload>
          }
          findFirst: {
            args: Prisma.PolicyTriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyTriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload>
          }
          findMany: {
            args: Prisma.PolicyTriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload>[]
          }
          create: {
            args: Prisma.PolicyTriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload>
          }
          createMany: {
            args: Prisma.PolicyTriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyTriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload>[]
          }
          delete: {
            args: Prisma.PolicyTriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload>
          }
          update: {
            args: Prisma.PolicyTriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload>
          }
          deleteMany: {
            args: Prisma.PolicyTriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyTriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PolicyTriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTriggerPayload>
          }
          aggregate: {
            args: Prisma.PolicyTriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicyTrigger>
          }
          groupBy: {
            args: Prisma.PolicyTriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyTriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyTriggerCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyTriggerCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Payout: {
        payload: Prisma.$PayoutPayload<ExtArgs>
        fields: Prisma.PayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          findFirst: {
            args: Prisma.PayoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          findMany: {
            args: Prisma.PayoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>[]
          }
          create: {
            args: Prisma.PayoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          createMany: {
            args: Prisma.PayoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>[]
          }
          delete: {
            args: Prisma.PayoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          update: {
            args: Prisma.PayoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          deleteMany: {
            args: Prisma.PayoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          aggregate: {
            args: Prisma.PayoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayout>
          }
          groupBy: {
            args: Prisma.PayoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayoutCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    policies: number
    capitalProviders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policies?: boolean | UserCountOutputTypeCountPoliciesArgs
    capitalProviders?: boolean | UserCountOutputTypeCountCapitalProvidersArgs
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
  export type UserCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCapitalProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapitalProviderWhereInput
  }


  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    riskPools: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    riskPools?: boolean | CommunityCountOutputTypeCountRiskPoolsArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountRiskPoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskPoolWhereInput
  }


  /**
   * Count Type EventTypeCountOutputType
   */

  export type EventTypeCountOutputType = {
    riskPools: number
  }

  export type EventTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    riskPools?: boolean | EventTypeCountOutputTypeCountRiskPoolsArgs
  }

  // Custom InputTypes
  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTypeCountOutputType
     */
    select?: EventTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeCountRiskPoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskPoolWhereInput
  }


  /**
   * Count Type RiskPoolCountOutputType
   */

  export type RiskPoolCountOutputType = {
    policies: number
    capitalProviders: number
    payouts: number
  }

  export type RiskPoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policies?: boolean | RiskPoolCountOutputTypeCountPoliciesArgs
    capitalProviders?: boolean | RiskPoolCountOutputTypeCountCapitalProvidersArgs
    payouts?: boolean | RiskPoolCountOutputTypeCountPayoutsArgs
  }

  // Custom InputTypes
  /**
   * RiskPoolCountOutputType without action
   */
  export type RiskPoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPoolCountOutputType
     */
    select?: RiskPoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RiskPoolCountOutputType without action
   */
  export type RiskPoolCountOutputTypeCountPoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
  }

  /**
   * RiskPoolCountOutputType without action
   */
  export type RiskPoolCountOutputTypeCountCapitalProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapitalProviderWhereInput
  }

  /**
   * RiskPoolCountOutputType without action
   */
  export type RiskPoolCountOutputTypeCountPayoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
  }


  /**
   * Count Type PolicyCountOutputType
   */

  export type PolicyCountOutputType = {
    policyTriggers: number
    payments: number
    payouts: number
  }

  export type PolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policyTriggers?: boolean | PolicyCountOutputTypeCountPolicyTriggersArgs
    payments?: boolean | PolicyCountOutputTypeCountPaymentsArgs
    payouts?: boolean | PolicyCountOutputTypeCountPayoutsArgs
  }

  // Custom InputTypes
  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     */
    select?: PolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountPolicyTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyTriggerWhereInput
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountPayoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
  }


  /**
   * Count Type OracleSourceCountOutputType
   */

  export type OracleSourceCountOutputType = {
    oracleData: number
  }

  export type OracleSourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oracleData?: boolean | OracleSourceCountOutputTypeCountOracleDataArgs
  }

  // Custom InputTypes
  /**
   * OracleSourceCountOutputType without action
   */
  export type OracleSourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSourceCountOutputType
     */
    select?: OracleSourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OracleSourceCountOutputType without action
   */
  export type OracleSourceCountOutputTypeCountOracleDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OracleDataWhereInput
  }


  /**
   * Count Type OracleDataCountOutputType
   */

  export type OracleDataCountOutputType = {
    policyTriggers: number
  }

  export type OracleDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policyTriggers?: boolean | OracleDataCountOutputTypeCountPolicyTriggersArgs
  }

  // Custom InputTypes
  /**
   * OracleDataCountOutputType without action
   */
  export type OracleDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleDataCountOutputType
     */
    select?: OracleDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OracleDataCountOutputType without action
   */
  export type OracleDataCountOutputTypeCountPolicyTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyTriggerWhereInput
  }


  /**
   * Count Type PayoutCountOutputType
   */

  export type PayoutCountOutputType = {
    policyTriggers: number
  }

  export type PayoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policyTriggers?: boolean | PayoutCountOutputTypeCountPolicyTriggersArgs
  }

  // Custom InputTypes
  /**
   * PayoutCountOutputType without action
   */
  export type PayoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutCountOutputType
     */
    select?: PayoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayoutCountOutputType without action
   */
  export type PayoutCountOutputTypeCountPolicyTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyTriggerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    phoneNumber: string | null
    walletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    phoneNumber: string | null
    walletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullName: number
    phoneNumber: number
    walletAddress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    phoneNumber?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    phoneNumber?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    phoneNumber?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    fullName: string | null
    phoneNumber: string | null
    walletAddress: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    policies?: boolean | User$policiesArgs<ExtArgs>
    capitalProviders?: boolean | User$capitalProvidersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policies?: boolean | User$policiesArgs<ExtArgs>
    capitalProviders?: boolean | User$capitalProvidersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      policies: Prisma.$PolicyPayload<ExtArgs>[]
      capitalProviders: Prisma.$CapitalProviderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      fullName: string | null
      phoneNumber: string | null
      walletAddress: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    policies<T extends User$policiesArgs<ExtArgs> = {}>(args?: Subset<T, User$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany"> | Null>
    capitalProviders<T extends User$capitalProvidersArgs<ExtArgs> = {}>(args?: Subset<T, User$capitalProvidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User.policies
   */
  export type User$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    cursor?: PolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * User.capitalProviders
   */
  export type User$capitalProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    where?: CapitalProviderWhereInput
    orderBy?: CapitalProviderOrderByWithRelationInput | CapitalProviderOrderByWithRelationInput[]
    cursor?: CapitalProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapitalProviderScalarFieldEnum | CapitalProviderScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    riskPools?: boolean | Community$riskPoolsArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    riskPools?: boolean | Community$riskPoolsArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      riskPools: Prisma.$RiskPoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
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
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    riskPools<T extends Community$riskPoolsArgs<ExtArgs> = {}>(args?: Subset<T, Community$riskPoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Community model
   */ 
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'Int'>
    readonly name: FieldRef<"Community", 'String'>
    readonly description: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
  }

  /**
   * Community.riskPools
   */
  export type Community$riskPoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    where?: RiskPoolWhereInput
    orderBy?: RiskPoolOrderByWithRelationInput | RiskPoolOrderByWithRelationInput[]
    cursor?: RiskPoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiskPoolScalarFieldEnum | RiskPoolScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model EventType
   */

  export type AggregateEventType = {
    _count: EventTypeCountAggregateOutputType | null
    _avg: EventTypeAvgAggregateOutputType | null
    _sum: EventTypeSumAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  export type EventTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type EventTypeSumAggregateOutputType = {
    id: number | null
  }

  export type EventTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type EventTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type EventTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type EventTypeAvgAggregateInputType = {
    id?: true
  }

  export type EventTypeSumAggregateInputType = {
    id?: true
  }

  export type EventTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type EventTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type EventTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type EventTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventType to aggregate.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTypes
    **/
    _count?: true | EventTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTypeMaxAggregateInputType
  }

  export type GetEventTypeAggregateType<T extends EventTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventType[P]>
      : GetScalarType<T[P], AggregateEventType[P]>
  }




  export type EventTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTypeWhereInput
    orderBy?: EventTypeOrderByWithAggregationInput | EventTypeOrderByWithAggregationInput[]
    by: EventTypeScalarFieldEnum[] | EventTypeScalarFieldEnum
    having?: EventTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTypeCountAggregateInputType | true
    _avg?: EventTypeAvgAggregateInputType
    _sum?: EventTypeSumAggregateInputType
    _min?: EventTypeMinAggregateInputType
    _max?: EventTypeMaxAggregateInputType
  }

  export type EventTypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: EventTypeCountAggregateOutputType | null
    _avg: EventTypeAvgAggregateOutputType | null
    _sum: EventTypeSumAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  type GetEventTypeGroupByPayload<T extends EventTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
        }
      >
    >


  export type EventTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    riskPools?: boolean | EventType$riskPoolsArgs<ExtArgs>
    _count?: boolean | EventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventType"]>

  export type EventTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["eventType"]>

  export type EventTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type EventTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    riskPools?: boolean | EventType$riskPoolsArgs<ExtArgs>
    _count?: boolean | EventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventType"
    objects: {
      riskPools: Prisma.$RiskPoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["eventType"]>
    composites: {}
  }

  type EventTypeGetPayload<S extends boolean | null | undefined | EventTypeDefaultArgs> = $Result.GetResult<Prisma.$EventTypePayload, S>

  type EventTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventTypeCountAggregateInputType | true
    }

  export interface EventTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventType'], meta: { name: 'EventType' } }
    /**
     * Find zero or one EventType that matches the filter.
     * @param {EventTypeFindUniqueArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTypeFindUniqueArgs>(args: SelectSubset<T, EventTypeFindUniqueArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventTypeFindUniqueOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTypeFindFirstArgs>(args?: SelectSubset<T, EventTypeFindFirstArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTypes
     * const eventTypes = await prisma.eventType.findMany()
     * 
     * // Get first 10 EventTypes
     * const eventTypes = await prisma.eventType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTypeFindManyArgs>(args?: SelectSubset<T, EventTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventType.
     * @param {EventTypeCreateArgs} args - Arguments to create a EventType.
     * @example
     * // Create one EventType
     * const EventType = await prisma.eventType.create({
     *   data: {
     *     // ... data to create a EventType
     *   }
     * })
     * 
     */
    create<T extends EventTypeCreateArgs>(args: SelectSubset<T, EventTypeCreateArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventTypes.
     * @param {EventTypeCreateManyArgs} args - Arguments to create many EventTypes.
     * @example
     * // Create many EventTypes
     * const eventType = await prisma.eventType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTypeCreateManyArgs>(args?: SelectSubset<T, EventTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTypes and returns the data saved in the database.
     * @param {EventTypeCreateManyAndReturnArgs} args - Arguments to create many EventTypes.
     * @example
     * // Create many EventTypes
     * const eventType = await prisma.eventType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTypes and only return the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventType.
     * @param {EventTypeDeleteArgs} args - Arguments to delete one EventType.
     * @example
     * // Delete one EventType
     * const EventType = await prisma.eventType.delete({
     *   where: {
     *     // ... filter to delete one EventType
     *   }
     * })
     * 
     */
    delete<T extends EventTypeDeleteArgs>(args: SelectSubset<T, EventTypeDeleteArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventType.
     * @param {EventTypeUpdateArgs} args - Arguments to update one EventType.
     * @example
     * // Update one EventType
     * const eventType = await prisma.eventType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTypeUpdateArgs>(args: SelectSubset<T, EventTypeUpdateArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventTypes.
     * @param {EventTypeDeleteManyArgs} args - Arguments to filter EventTypes to delete.
     * @example
     * // Delete a few EventTypes
     * const { count } = await prisma.eventType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTypeDeleteManyArgs>(args?: SelectSubset<T, EventTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTypes
     * const eventType = await prisma.eventType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTypeUpdateManyArgs>(args: SelectSubset<T, EventTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventType.
     * @param {EventTypeUpsertArgs} args - Arguments to update or create a EventType.
     * @example
     * // Update or create a EventType
     * const eventType = await prisma.eventType.upsert({
     *   create: {
     *     // ... data to create a EventType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventType we want to update
     *   }
     * })
     */
    upsert<T extends EventTypeUpsertArgs>(args: SelectSubset<T, EventTypeUpsertArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeCountArgs} args - Arguments to filter EventTypes to count.
     * @example
     * // Count the number of EventTypes
     * const count = await prisma.eventType.count({
     *   where: {
     *     // ... the filter for the EventTypes we want to count
     *   }
     * })
    **/
    count<T extends EventTypeCountArgs>(
      args?: Subset<T, EventTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTypeAggregateArgs>(args: Subset<T, EventTypeAggregateArgs>): Prisma.PrismaPromise<GetEventTypeAggregateType<T>>

    /**
     * Group by EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeGroupByArgs} args - Group by arguments.
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
      T extends EventTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTypeGroupByArgs['orderBy'] }
        : { orderBy?: EventTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventType model
   */
  readonly fields: EventTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    riskPools<T extends EventType$riskPoolsArgs<ExtArgs> = {}>(args?: Subset<T, EventType$riskPoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the EventType model
   */ 
  interface EventTypeFieldRefs {
    readonly id: FieldRef<"EventType", 'Int'>
    readonly name: FieldRef<"EventType", 'String'>
    readonly description: FieldRef<"EventType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventType findUnique
   */
  export type EventTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType findUniqueOrThrow
   */
  export type EventTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType findFirst
   */
  export type EventTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType findFirstOrThrow
   */
  export type EventTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType findMany
   */
  export type EventTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventTypes to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType create
   */
  export type EventTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventType.
     */
    data: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
  }

  /**
   * EventType createMany
   */
  export type EventTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTypes.
     */
    data: EventTypeCreateManyInput | EventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventType createManyAndReturn
   */
  export type EventTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventTypes.
     */
    data: EventTypeCreateManyInput | EventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventType update
   */
  export type EventTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventType.
     */
    data: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
    /**
     * Choose, which EventType to update.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType updateMany
   */
  export type EventTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTypes.
     */
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyInput>
    /**
     * Filter which EventTypes to update
     */
    where?: EventTypeWhereInput
  }

  /**
   * EventType upsert
   */
  export type EventTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventType to update in case it exists.
     */
    where: EventTypeWhereUniqueInput
    /**
     * In case the EventType found by the `where` argument doesn't exist, create a new EventType with this data.
     */
    create: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
    /**
     * In case the EventType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
  }

  /**
   * EventType delete
   */
  export type EventTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter which EventType to delete.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType deleteMany
   */
  export type EventTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTypes to delete
     */
    where?: EventTypeWhereInput
  }

  /**
   * EventType.riskPools
   */
  export type EventType$riskPoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    where?: RiskPoolWhereInput
    orderBy?: RiskPoolOrderByWithRelationInput | RiskPoolOrderByWithRelationInput[]
    cursor?: RiskPoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiskPoolScalarFieldEnum | RiskPoolScalarFieldEnum[]
  }

  /**
   * EventType without action
   */
  export type EventTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
  }


  /**
   * Model RiskPool
   */

  export type AggregateRiskPool = {
    _count: RiskPoolCountAggregateOutputType | null
    _avg: RiskPoolAvgAggregateOutputType | null
    _sum: RiskPoolSumAggregateOutputType | null
    _min: RiskPoolMinAggregateOutputType | null
    _max: RiskPoolMaxAggregateOutputType | null
  }

  export type RiskPoolAvgAggregateOutputType = {
    id: number | null
    communityId: number | null
    eventTypeId: number | null
    totalCapital: Decimal | null
  }

  export type RiskPoolSumAggregateOutputType = {
    id: number | null
    communityId: number | null
    eventTypeId: number | null
    totalCapital: Decimal | null
  }

  export type RiskPoolMinAggregateOutputType = {
    id: number | null
    communityId: number | null
    eventTypeId: number | null
    totalCapital: Decimal | null
    createdAt: Date | null
  }

  export type RiskPoolMaxAggregateOutputType = {
    id: number | null
    communityId: number | null
    eventTypeId: number | null
    totalCapital: Decimal | null
    createdAt: Date | null
  }

  export type RiskPoolCountAggregateOutputType = {
    id: number
    communityId: number
    eventTypeId: number
    totalCapital: number
    createdAt: number
    _all: number
  }


  export type RiskPoolAvgAggregateInputType = {
    id?: true
    communityId?: true
    eventTypeId?: true
    totalCapital?: true
  }

  export type RiskPoolSumAggregateInputType = {
    id?: true
    communityId?: true
    eventTypeId?: true
    totalCapital?: true
  }

  export type RiskPoolMinAggregateInputType = {
    id?: true
    communityId?: true
    eventTypeId?: true
    totalCapital?: true
    createdAt?: true
  }

  export type RiskPoolMaxAggregateInputType = {
    id?: true
    communityId?: true
    eventTypeId?: true
    totalCapital?: true
    createdAt?: true
  }

  export type RiskPoolCountAggregateInputType = {
    id?: true
    communityId?: true
    eventTypeId?: true
    totalCapital?: true
    createdAt?: true
    _all?: true
  }

  export type RiskPoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskPool to aggregate.
     */
    where?: RiskPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskPools to fetch.
     */
    orderBy?: RiskPoolOrderByWithRelationInput | RiskPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskPools
    **/
    _count?: true | RiskPoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskPoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskPoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskPoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskPoolMaxAggregateInputType
  }

  export type GetRiskPoolAggregateType<T extends RiskPoolAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskPool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskPool[P]>
      : GetScalarType<T[P], AggregateRiskPool[P]>
  }




  export type RiskPoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskPoolWhereInput
    orderBy?: RiskPoolOrderByWithAggregationInput | RiskPoolOrderByWithAggregationInput[]
    by: RiskPoolScalarFieldEnum[] | RiskPoolScalarFieldEnum
    having?: RiskPoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskPoolCountAggregateInputType | true
    _avg?: RiskPoolAvgAggregateInputType
    _sum?: RiskPoolSumAggregateInputType
    _min?: RiskPoolMinAggregateInputType
    _max?: RiskPoolMaxAggregateInputType
  }

  export type RiskPoolGroupByOutputType = {
    id: number
    communityId: number
    eventTypeId: number
    totalCapital: Decimal
    createdAt: Date
    _count: RiskPoolCountAggregateOutputType | null
    _avg: RiskPoolAvgAggregateOutputType | null
    _sum: RiskPoolSumAggregateOutputType | null
    _min: RiskPoolMinAggregateOutputType | null
    _max: RiskPoolMaxAggregateOutputType | null
  }

  type GetRiskPoolGroupByPayload<T extends RiskPoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskPoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskPoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskPoolGroupByOutputType[P]>
            : GetScalarType<T[P], RiskPoolGroupByOutputType[P]>
        }
      >
    >


  export type RiskPoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    eventTypeId?: boolean
    totalCapital?: boolean
    createdAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
    policies?: boolean | RiskPool$policiesArgs<ExtArgs>
    capitalProviders?: boolean | RiskPool$capitalProvidersArgs<ExtArgs>
    payouts?: boolean | RiskPool$payoutsArgs<ExtArgs>
    _count?: boolean | RiskPoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskPool"]>

  export type RiskPoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    eventTypeId?: boolean
    totalCapital?: boolean
    createdAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskPool"]>

  export type RiskPoolSelectScalar = {
    id?: boolean
    communityId?: boolean
    eventTypeId?: boolean
    totalCapital?: boolean
    createdAt?: boolean
  }

  export type RiskPoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
    policies?: boolean | RiskPool$policiesArgs<ExtArgs>
    capitalProviders?: boolean | RiskPool$capitalProvidersArgs<ExtArgs>
    payouts?: boolean | RiskPool$payoutsArgs<ExtArgs>
    _count?: boolean | RiskPoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RiskPoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }

  export type $RiskPoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskPool"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
      eventType: Prisma.$EventTypePayload<ExtArgs>
      policies: Prisma.$PolicyPayload<ExtArgs>[]
      capitalProviders: Prisma.$CapitalProviderPayload<ExtArgs>[]
      payouts: Prisma.$PayoutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      communityId: number
      eventTypeId: number
      totalCapital: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["riskPool"]>
    composites: {}
  }

  type RiskPoolGetPayload<S extends boolean | null | undefined | RiskPoolDefaultArgs> = $Result.GetResult<Prisma.$RiskPoolPayload, S>

  type RiskPoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RiskPoolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RiskPoolCountAggregateInputType | true
    }

  export interface RiskPoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskPool'], meta: { name: 'RiskPool' } }
    /**
     * Find zero or one RiskPool that matches the filter.
     * @param {RiskPoolFindUniqueArgs} args - Arguments to find a RiskPool
     * @example
     * // Get one RiskPool
     * const riskPool = await prisma.riskPool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskPoolFindUniqueArgs>(args: SelectSubset<T, RiskPoolFindUniqueArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RiskPool that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RiskPoolFindUniqueOrThrowArgs} args - Arguments to find a RiskPool
     * @example
     * // Get one RiskPool
     * const riskPool = await prisma.riskPool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskPoolFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskPoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RiskPool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPoolFindFirstArgs} args - Arguments to find a RiskPool
     * @example
     * // Get one RiskPool
     * const riskPool = await prisma.riskPool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskPoolFindFirstArgs>(args?: SelectSubset<T, RiskPoolFindFirstArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RiskPool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPoolFindFirstOrThrowArgs} args - Arguments to find a RiskPool
     * @example
     * // Get one RiskPool
     * const riskPool = await prisma.riskPool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskPoolFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskPoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RiskPools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskPools
     * const riskPools = await prisma.riskPool.findMany()
     * 
     * // Get first 10 RiskPools
     * const riskPools = await prisma.riskPool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskPoolWithIdOnly = await prisma.riskPool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskPoolFindManyArgs>(args?: SelectSubset<T, RiskPoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RiskPool.
     * @param {RiskPoolCreateArgs} args - Arguments to create a RiskPool.
     * @example
     * // Create one RiskPool
     * const RiskPool = await prisma.riskPool.create({
     *   data: {
     *     // ... data to create a RiskPool
     *   }
     * })
     * 
     */
    create<T extends RiskPoolCreateArgs>(args: SelectSubset<T, RiskPoolCreateArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RiskPools.
     * @param {RiskPoolCreateManyArgs} args - Arguments to create many RiskPools.
     * @example
     * // Create many RiskPools
     * const riskPool = await prisma.riskPool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskPoolCreateManyArgs>(args?: SelectSubset<T, RiskPoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskPools and returns the data saved in the database.
     * @param {RiskPoolCreateManyAndReturnArgs} args - Arguments to create many RiskPools.
     * @example
     * // Create many RiskPools
     * const riskPool = await prisma.riskPool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskPools and only return the `id`
     * const riskPoolWithIdOnly = await prisma.riskPool.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskPoolCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskPoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RiskPool.
     * @param {RiskPoolDeleteArgs} args - Arguments to delete one RiskPool.
     * @example
     * // Delete one RiskPool
     * const RiskPool = await prisma.riskPool.delete({
     *   where: {
     *     // ... filter to delete one RiskPool
     *   }
     * })
     * 
     */
    delete<T extends RiskPoolDeleteArgs>(args: SelectSubset<T, RiskPoolDeleteArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RiskPool.
     * @param {RiskPoolUpdateArgs} args - Arguments to update one RiskPool.
     * @example
     * // Update one RiskPool
     * const riskPool = await prisma.riskPool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskPoolUpdateArgs>(args: SelectSubset<T, RiskPoolUpdateArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RiskPools.
     * @param {RiskPoolDeleteManyArgs} args - Arguments to filter RiskPools to delete.
     * @example
     * // Delete a few RiskPools
     * const { count } = await prisma.riskPool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskPoolDeleteManyArgs>(args?: SelectSubset<T, RiskPoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskPools
     * const riskPool = await prisma.riskPool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskPoolUpdateManyArgs>(args: SelectSubset<T, RiskPoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RiskPool.
     * @param {RiskPoolUpsertArgs} args - Arguments to update or create a RiskPool.
     * @example
     * // Update or create a RiskPool
     * const riskPool = await prisma.riskPool.upsert({
     *   create: {
     *     // ... data to create a RiskPool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskPool we want to update
     *   }
     * })
     */
    upsert<T extends RiskPoolUpsertArgs>(args: SelectSubset<T, RiskPoolUpsertArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RiskPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPoolCountArgs} args - Arguments to filter RiskPools to count.
     * @example
     * // Count the number of RiskPools
     * const count = await prisma.riskPool.count({
     *   where: {
     *     // ... the filter for the RiskPools we want to count
     *   }
     * })
    **/
    count<T extends RiskPoolCountArgs>(
      args?: Subset<T, RiskPoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskPoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiskPoolAggregateArgs>(args: Subset<T, RiskPoolAggregateArgs>): Prisma.PrismaPromise<GetRiskPoolAggregateType<T>>

    /**
     * Group by RiskPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPoolGroupByArgs} args - Group by arguments.
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
      T extends RiskPoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskPoolGroupByArgs['orderBy'] }
        : { orderBy?: RiskPoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RiskPoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskPool model
   */
  readonly fields: RiskPoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskPool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskPoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    eventType<T extends EventTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventTypeDefaultArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    policies<T extends RiskPool$policiesArgs<ExtArgs> = {}>(args?: Subset<T, RiskPool$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany"> | Null>
    capitalProviders<T extends RiskPool$capitalProvidersArgs<ExtArgs> = {}>(args?: Subset<T, RiskPool$capitalProvidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "findMany"> | Null>
    payouts<T extends RiskPool$payoutsArgs<ExtArgs> = {}>(args?: Subset<T, RiskPool$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the RiskPool model
   */ 
  interface RiskPoolFieldRefs {
    readonly id: FieldRef<"RiskPool", 'Int'>
    readonly communityId: FieldRef<"RiskPool", 'Int'>
    readonly eventTypeId: FieldRef<"RiskPool", 'Int'>
    readonly totalCapital: FieldRef<"RiskPool", 'Decimal'>
    readonly createdAt: FieldRef<"RiskPool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskPool findUnique
   */
  export type RiskPoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * Filter, which RiskPool to fetch.
     */
    where: RiskPoolWhereUniqueInput
  }

  /**
   * RiskPool findUniqueOrThrow
   */
  export type RiskPoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * Filter, which RiskPool to fetch.
     */
    where: RiskPoolWhereUniqueInput
  }

  /**
   * RiskPool findFirst
   */
  export type RiskPoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * Filter, which RiskPool to fetch.
     */
    where?: RiskPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskPools to fetch.
     */
    orderBy?: RiskPoolOrderByWithRelationInput | RiskPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskPools.
     */
    cursor?: RiskPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskPools.
     */
    distinct?: RiskPoolScalarFieldEnum | RiskPoolScalarFieldEnum[]
  }

  /**
   * RiskPool findFirstOrThrow
   */
  export type RiskPoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * Filter, which RiskPool to fetch.
     */
    where?: RiskPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskPools to fetch.
     */
    orderBy?: RiskPoolOrderByWithRelationInput | RiskPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskPools.
     */
    cursor?: RiskPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskPools.
     */
    distinct?: RiskPoolScalarFieldEnum | RiskPoolScalarFieldEnum[]
  }

  /**
   * RiskPool findMany
   */
  export type RiskPoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * Filter, which RiskPools to fetch.
     */
    where?: RiskPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskPools to fetch.
     */
    orderBy?: RiskPoolOrderByWithRelationInput | RiskPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskPools.
     */
    cursor?: RiskPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskPools.
     */
    skip?: number
    distinct?: RiskPoolScalarFieldEnum | RiskPoolScalarFieldEnum[]
  }

  /**
   * RiskPool create
   */
  export type RiskPoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskPool.
     */
    data: XOR<RiskPoolCreateInput, RiskPoolUncheckedCreateInput>
  }

  /**
   * RiskPool createMany
   */
  export type RiskPoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskPools.
     */
    data: RiskPoolCreateManyInput | RiskPoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskPool createManyAndReturn
   */
  export type RiskPoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RiskPools.
     */
    data: RiskPoolCreateManyInput | RiskPoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskPool update
   */
  export type RiskPoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskPool.
     */
    data: XOR<RiskPoolUpdateInput, RiskPoolUncheckedUpdateInput>
    /**
     * Choose, which RiskPool to update.
     */
    where: RiskPoolWhereUniqueInput
  }

  /**
   * RiskPool updateMany
   */
  export type RiskPoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskPools.
     */
    data: XOR<RiskPoolUpdateManyMutationInput, RiskPoolUncheckedUpdateManyInput>
    /**
     * Filter which RiskPools to update
     */
    where?: RiskPoolWhereInput
  }

  /**
   * RiskPool upsert
   */
  export type RiskPoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskPool to update in case it exists.
     */
    where: RiskPoolWhereUniqueInput
    /**
     * In case the RiskPool found by the `where` argument doesn't exist, create a new RiskPool with this data.
     */
    create: XOR<RiskPoolCreateInput, RiskPoolUncheckedCreateInput>
    /**
     * In case the RiskPool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskPoolUpdateInput, RiskPoolUncheckedUpdateInput>
  }

  /**
   * RiskPool delete
   */
  export type RiskPoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    /**
     * Filter which RiskPool to delete.
     */
    where: RiskPoolWhereUniqueInput
  }

  /**
   * RiskPool deleteMany
   */
  export type RiskPoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskPools to delete
     */
    where?: RiskPoolWhereInput
  }

  /**
   * RiskPool.policies
   */
  export type RiskPool$policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    cursor?: PolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * RiskPool.capitalProviders
   */
  export type RiskPool$capitalProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    where?: CapitalProviderWhereInput
    orderBy?: CapitalProviderOrderByWithRelationInput | CapitalProviderOrderByWithRelationInput[]
    cursor?: CapitalProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapitalProviderScalarFieldEnum | CapitalProviderScalarFieldEnum[]
  }

  /**
   * RiskPool.payouts
   */
  export type RiskPool$payoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    cursor?: PayoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * RiskPool without action
   */
  export type RiskPoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
  }


  /**
   * Model CapitalProvider
   */

  export type AggregateCapitalProvider = {
    _count: CapitalProviderCountAggregateOutputType | null
    _avg: CapitalProviderAvgAggregateOutputType | null
    _sum: CapitalProviderSumAggregateOutputType | null
    _min: CapitalProviderMinAggregateOutputType | null
    _max: CapitalProviderMaxAggregateOutputType | null
  }

  export type CapitalProviderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    riskPoolId: number | null
    stakeAmount: Decimal | null
  }

  export type CapitalProviderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    riskPoolId: number | null
    stakeAmount: Decimal | null
  }

  export type CapitalProviderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    riskPoolId: number | null
    stakeAmount: Decimal | null
    stakeDate: Date | null
    createdAt: Date | null
  }

  export type CapitalProviderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    riskPoolId: number | null
    stakeAmount: Decimal | null
    stakeDate: Date | null
    createdAt: Date | null
  }

  export type CapitalProviderCountAggregateOutputType = {
    id: number
    userId: number
    riskPoolId: number
    stakeAmount: number
    stakeDate: number
    createdAt: number
    _all: number
  }


  export type CapitalProviderAvgAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    stakeAmount?: true
  }

  export type CapitalProviderSumAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    stakeAmount?: true
  }

  export type CapitalProviderMinAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    stakeAmount?: true
    stakeDate?: true
    createdAt?: true
  }

  export type CapitalProviderMaxAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    stakeAmount?: true
    stakeDate?: true
    createdAt?: true
  }

  export type CapitalProviderCountAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    stakeAmount?: true
    stakeDate?: true
    createdAt?: true
    _all?: true
  }

  export type CapitalProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapitalProvider to aggregate.
     */
    where?: CapitalProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapitalProviders to fetch.
     */
    orderBy?: CapitalProviderOrderByWithRelationInput | CapitalProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapitalProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapitalProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapitalProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CapitalProviders
    **/
    _count?: true | CapitalProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapitalProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapitalProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapitalProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapitalProviderMaxAggregateInputType
  }

  export type GetCapitalProviderAggregateType<T extends CapitalProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateCapitalProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapitalProvider[P]>
      : GetScalarType<T[P], AggregateCapitalProvider[P]>
  }




  export type CapitalProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapitalProviderWhereInput
    orderBy?: CapitalProviderOrderByWithAggregationInput | CapitalProviderOrderByWithAggregationInput[]
    by: CapitalProviderScalarFieldEnum[] | CapitalProviderScalarFieldEnum
    having?: CapitalProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapitalProviderCountAggregateInputType | true
    _avg?: CapitalProviderAvgAggregateInputType
    _sum?: CapitalProviderSumAggregateInputType
    _min?: CapitalProviderMinAggregateInputType
    _max?: CapitalProviderMaxAggregateInputType
  }

  export type CapitalProviderGroupByOutputType = {
    id: number
    userId: number
    riskPoolId: number
    stakeAmount: Decimal
    stakeDate: Date
    createdAt: Date
    _count: CapitalProviderCountAggregateOutputType | null
    _avg: CapitalProviderAvgAggregateOutputType | null
    _sum: CapitalProviderSumAggregateOutputType | null
    _min: CapitalProviderMinAggregateOutputType | null
    _max: CapitalProviderMaxAggregateOutputType | null
  }

  type GetCapitalProviderGroupByPayload<T extends CapitalProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapitalProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapitalProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapitalProviderGroupByOutputType[P]>
            : GetScalarType<T[P], CapitalProviderGroupByOutputType[P]>
        }
      >
    >


  export type CapitalProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    riskPoolId?: boolean
    stakeAmount?: boolean
    stakeDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    riskPool?: boolean | RiskPoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capitalProvider"]>

  export type CapitalProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    riskPoolId?: boolean
    stakeAmount?: boolean
    stakeDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    riskPool?: boolean | RiskPoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capitalProvider"]>

  export type CapitalProviderSelectScalar = {
    id?: boolean
    userId?: boolean
    riskPoolId?: boolean
    stakeAmount?: boolean
    stakeDate?: boolean
    createdAt?: boolean
  }

  export type CapitalProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    riskPool?: boolean | RiskPoolDefaultArgs<ExtArgs>
  }
  export type CapitalProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    riskPool?: boolean | RiskPoolDefaultArgs<ExtArgs>
  }

  export type $CapitalProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CapitalProvider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      riskPool: Prisma.$RiskPoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      riskPoolId: number
      stakeAmount: Prisma.Decimal
      stakeDate: Date
      createdAt: Date
    }, ExtArgs["result"]["capitalProvider"]>
    composites: {}
  }

  type CapitalProviderGetPayload<S extends boolean | null | undefined | CapitalProviderDefaultArgs> = $Result.GetResult<Prisma.$CapitalProviderPayload, S>

  type CapitalProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CapitalProviderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CapitalProviderCountAggregateInputType | true
    }

  export interface CapitalProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CapitalProvider'], meta: { name: 'CapitalProvider' } }
    /**
     * Find zero or one CapitalProvider that matches the filter.
     * @param {CapitalProviderFindUniqueArgs} args - Arguments to find a CapitalProvider
     * @example
     * // Get one CapitalProvider
     * const capitalProvider = await prisma.capitalProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapitalProviderFindUniqueArgs>(args: SelectSubset<T, CapitalProviderFindUniqueArgs<ExtArgs>>): Prisma__CapitalProviderClient<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CapitalProvider that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CapitalProviderFindUniqueOrThrowArgs} args - Arguments to find a CapitalProvider
     * @example
     * // Get one CapitalProvider
     * const capitalProvider = await prisma.capitalProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapitalProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, CapitalProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapitalProviderClient<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CapitalProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalProviderFindFirstArgs} args - Arguments to find a CapitalProvider
     * @example
     * // Get one CapitalProvider
     * const capitalProvider = await prisma.capitalProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapitalProviderFindFirstArgs>(args?: SelectSubset<T, CapitalProviderFindFirstArgs<ExtArgs>>): Prisma__CapitalProviderClient<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CapitalProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalProviderFindFirstOrThrowArgs} args - Arguments to find a CapitalProvider
     * @example
     * // Get one CapitalProvider
     * const capitalProvider = await prisma.capitalProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapitalProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, CapitalProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapitalProviderClient<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CapitalProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CapitalProviders
     * const capitalProviders = await prisma.capitalProvider.findMany()
     * 
     * // Get first 10 CapitalProviders
     * const capitalProviders = await prisma.capitalProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capitalProviderWithIdOnly = await prisma.capitalProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapitalProviderFindManyArgs>(args?: SelectSubset<T, CapitalProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CapitalProvider.
     * @param {CapitalProviderCreateArgs} args - Arguments to create a CapitalProvider.
     * @example
     * // Create one CapitalProvider
     * const CapitalProvider = await prisma.capitalProvider.create({
     *   data: {
     *     // ... data to create a CapitalProvider
     *   }
     * })
     * 
     */
    create<T extends CapitalProviderCreateArgs>(args: SelectSubset<T, CapitalProviderCreateArgs<ExtArgs>>): Prisma__CapitalProviderClient<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CapitalProviders.
     * @param {CapitalProviderCreateManyArgs} args - Arguments to create many CapitalProviders.
     * @example
     * // Create many CapitalProviders
     * const capitalProvider = await prisma.capitalProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapitalProviderCreateManyArgs>(args?: SelectSubset<T, CapitalProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CapitalProviders and returns the data saved in the database.
     * @param {CapitalProviderCreateManyAndReturnArgs} args - Arguments to create many CapitalProviders.
     * @example
     * // Create many CapitalProviders
     * const capitalProvider = await prisma.capitalProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CapitalProviders and only return the `id`
     * const capitalProviderWithIdOnly = await prisma.capitalProvider.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CapitalProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, CapitalProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CapitalProvider.
     * @param {CapitalProviderDeleteArgs} args - Arguments to delete one CapitalProvider.
     * @example
     * // Delete one CapitalProvider
     * const CapitalProvider = await prisma.capitalProvider.delete({
     *   where: {
     *     // ... filter to delete one CapitalProvider
     *   }
     * })
     * 
     */
    delete<T extends CapitalProviderDeleteArgs>(args: SelectSubset<T, CapitalProviderDeleteArgs<ExtArgs>>): Prisma__CapitalProviderClient<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CapitalProvider.
     * @param {CapitalProviderUpdateArgs} args - Arguments to update one CapitalProvider.
     * @example
     * // Update one CapitalProvider
     * const capitalProvider = await prisma.capitalProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapitalProviderUpdateArgs>(args: SelectSubset<T, CapitalProviderUpdateArgs<ExtArgs>>): Prisma__CapitalProviderClient<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CapitalProviders.
     * @param {CapitalProviderDeleteManyArgs} args - Arguments to filter CapitalProviders to delete.
     * @example
     * // Delete a few CapitalProviders
     * const { count } = await prisma.capitalProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapitalProviderDeleteManyArgs>(args?: SelectSubset<T, CapitalProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapitalProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CapitalProviders
     * const capitalProvider = await prisma.capitalProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapitalProviderUpdateManyArgs>(args: SelectSubset<T, CapitalProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CapitalProvider.
     * @param {CapitalProviderUpsertArgs} args - Arguments to update or create a CapitalProvider.
     * @example
     * // Update or create a CapitalProvider
     * const capitalProvider = await prisma.capitalProvider.upsert({
     *   create: {
     *     // ... data to create a CapitalProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CapitalProvider we want to update
     *   }
     * })
     */
    upsert<T extends CapitalProviderUpsertArgs>(args: SelectSubset<T, CapitalProviderUpsertArgs<ExtArgs>>): Prisma__CapitalProviderClient<$Result.GetResult<Prisma.$CapitalProviderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CapitalProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalProviderCountArgs} args - Arguments to filter CapitalProviders to count.
     * @example
     * // Count the number of CapitalProviders
     * const count = await prisma.capitalProvider.count({
     *   where: {
     *     // ... the filter for the CapitalProviders we want to count
     *   }
     * })
    **/
    count<T extends CapitalProviderCountArgs>(
      args?: Subset<T, CapitalProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapitalProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CapitalProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CapitalProviderAggregateArgs>(args: Subset<T, CapitalProviderAggregateArgs>): Prisma.PrismaPromise<GetCapitalProviderAggregateType<T>>

    /**
     * Group by CapitalProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalProviderGroupByArgs} args - Group by arguments.
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
      T extends CapitalProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapitalProviderGroupByArgs['orderBy'] }
        : { orderBy?: CapitalProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CapitalProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapitalProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CapitalProvider model
   */
  readonly fields: CapitalProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CapitalProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapitalProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    riskPool<T extends RiskPoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiskPoolDefaultArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CapitalProvider model
   */ 
  interface CapitalProviderFieldRefs {
    readonly id: FieldRef<"CapitalProvider", 'Int'>
    readonly userId: FieldRef<"CapitalProvider", 'Int'>
    readonly riskPoolId: FieldRef<"CapitalProvider", 'Int'>
    readonly stakeAmount: FieldRef<"CapitalProvider", 'Decimal'>
    readonly stakeDate: FieldRef<"CapitalProvider", 'DateTime'>
    readonly createdAt: FieldRef<"CapitalProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CapitalProvider findUnique
   */
  export type CapitalProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * Filter, which CapitalProvider to fetch.
     */
    where: CapitalProviderWhereUniqueInput
  }

  /**
   * CapitalProvider findUniqueOrThrow
   */
  export type CapitalProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * Filter, which CapitalProvider to fetch.
     */
    where: CapitalProviderWhereUniqueInput
  }

  /**
   * CapitalProvider findFirst
   */
  export type CapitalProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * Filter, which CapitalProvider to fetch.
     */
    where?: CapitalProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapitalProviders to fetch.
     */
    orderBy?: CapitalProviderOrderByWithRelationInput | CapitalProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapitalProviders.
     */
    cursor?: CapitalProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapitalProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapitalProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapitalProviders.
     */
    distinct?: CapitalProviderScalarFieldEnum | CapitalProviderScalarFieldEnum[]
  }

  /**
   * CapitalProvider findFirstOrThrow
   */
  export type CapitalProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * Filter, which CapitalProvider to fetch.
     */
    where?: CapitalProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapitalProviders to fetch.
     */
    orderBy?: CapitalProviderOrderByWithRelationInput | CapitalProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapitalProviders.
     */
    cursor?: CapitalProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapitalProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapitalProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapitalProviders.
     */
    distinct?: CapitalProviderScalarFieldEnum | CapitalProviderScalarFieldEnum[]
  }

  /**
   * CapitalProvider findMany
   */
  export type CapitalProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * Filter, which CapitalProviders to fetch.
     */
    where?: CapitalProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapitalProviders to fetch.
     */
    orderBy?: CapitalProviderOrderByWithRelationInput | CapitalProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CapitalProviders.
     */
    cursor?: CapitalProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapitalProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapitalProviders.
     */
    skip?: number
    distinct?: CapitalProviderScalarFieldEnum | CapitalProviderScalarFieldEnum[]
  }

  /**
   * CapitalProvider create
   */
  export type CapitalProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a CapitalProvider.
     */
    data: XOR<CapitalProviderCreateInput, CapitalProviderUncheckedCreateInput>
  }

  /**
   * CapitalProvider createMany
   */
  export type CapitalProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CapitalProviders.
     */
    data: CapitalProviderCreateManyInput | CapitalProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CapitalProvider createManyAndReturn
   */
  export type CapitalProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CapitalProviders.
     */
    data: CapitalProviderCreateManyInput | CapitalProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CapitalProvider update
   */
  export type CapitalProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a CapitalProvider.
     */
    data: XOR<CapitalProviderUpdateInput, CapitalProviderUncheckedUpdateInput>
    /**
     * Choose, which CapitalProvider to update.
     */
    where: CapitalProviderWhereUniqueInput
  }

  /**
   * CapitalProvider updateMany
   */
  export type CapitalProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CapitalProviders.
     */
    data: XOR<CapitalProviderUpdateManyMutationInput, CapitalProviderUncheckedUpdateManyInput>
    /**
     * Filter which CapitalProviders to update
     */
    where?: CapitalProviderWhereInput
  }

  /**
   * CapitalProvider upsert
   */
  export type CapitalProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the CapitalProvider to update in case it exists.
     */
    where: CapitalProviderWhereUniqueInput
    /**
     * In case the CapitalProvider found by the `where` argument doesn't exist, create a new CapitalProvider with this data.
     */
    create: XOR<CapitalProviderCreateInput, CapitalProviderUncheckedCreateInput>
    /**
     * In case the CapitalProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapitalProviderUpdateInput, CapitalProviderUncheckedUpdateInput>
  }

  /**
   * CapitalProvider delete
   */
  export type CapitalProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
    /**
     * Filter which CapitalProvider to delete.
     */
    where: CapitalProviderWhereUniqueInput
  }

  /**
   * CapitalProvider deleteMany
   */
  export type CapitalProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapitalProviders to delete
     */
    where?: CapitalProviderWhereInput
  }

  /**
   * CapitalProvider without action
   */
  export type CapitalProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalProvider
     */
    select?: CapitalProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapitalProviderInclude<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    riskPoolId: number | null
    coverageAmount: Decimal | null
    premiumAmount: Decimal | null
  }

  export type PolicySumAggregateOutputType = {
    id: number | null
    userId: number | null
    riskPoolId: number | null
    coverageAmount: Decimal | null
    premiumAmount: Decimal | null
  }

  export type PolicyMinAggregateOutputType = {
    id: number | null
    userId: number | null
    riskPoolId: number | null
    coverageAmount: Decimal | null
    premiumAmount: Decimal | null
    coverageStart: Date | null
    coverageEnd: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    riskPoolId: number | null
    coverageAmount: Decimal | null
    premiumAmount: Decimal | null
    coverageStart: Date | null
    coverageEnd: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    userId: number
    riskPoolId: number
    coverageAmount: number
    premiumAmount: number
    coverageStart: number
    coverageEnd: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    coverageAmount?: true
    premiumAmount?: true
  }

  export type PolicySumAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    coverageAmount?: true
    premiumAmount?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    coverageAmount?: true
    premiumAmount?: true
    coverageStart?: true
    coverageEnd?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    coverageAmount?: true
    premiumAmount?: true
    coverageStart?: true
    coverageEnd?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    userId?: true
    riskPoolId?: true
    coverageAmount?: true
    premiumAmount?: true
    coverageStart?: true
    coverageEnd?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: number
    userId: number
    riskPoolId: number
    coverageAmount: Decimal
    premiumAmount: Decimal
    coverageStart: Date
    coverageEnd: Date
    status: string
    createdAt: Date
    updatedAt: Date
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    riskPoolId?: boolean
    coverageAmount?: boolean
    premiumAmount?: boolean
    coverageStart?: boolean
    coverageEnd?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    riskPool?: boolean | RiskPoolDefaultArgs<ExtArgs>
    policyTriggers?: boolean | Policy$policyTriggersArgs<ExtArgs>
    payments?: boolean | Policy$paymentsArgs<ExtArgs>
    payouts?: boolean | Policy$payoutsArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    riskPoolId?: boolean
    coverageAmount?: boolean
    premiumAmount?: boolean
    coverageStart?: boolean
    coverageEnd?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    riskPool?: boolean | RiskPoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    userId?: boolean
    riskPoolId?: boolean
    coverageAmount?: boolean
    premiumAmount?: boolean
    coverageStart?: boolean
    coverageEnd?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    riskPool?: boolean | RiskPoolDefaultArgs<ExtArgs>
    policyTriggers?: boolean | Policy$policyTriggersArgs<ExtArgs>
    payments?: boolean | Policy$paymentsArgs<ExtArgs>
    payouts?: boolean | Policy$payoutsArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    riskPool?: boolean | RiskPoolDefaultArgs<ExtArgs>
  }

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      riskPool: Prisma.$RiskPoolPayload<ExtArgs>
      policyTriggers: Prisma.$PolicyTriggerPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      payouts: Prisma.$PayoutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      riskPoolId: number
      coverageAmount: Prisma.Decimal
      premiumAmount: Prisma.Decimal
      coverageStart: Date
      coverageEnd: Date
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
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
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    riskPool<T extends RiskPoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiskPoolDefaultArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    policyTriggers<T extends Policy$policyTriggersArgs<ExtArgs> = {}>(args?: Subset<T, Policy$policyTriggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Policy$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Policy$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    payouts<T extends Policy$payoutsArgs<ExtArgs> = {}>(args?: Subset<T, Policy$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Policy model
   */ 
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'Int'>
    readonly userId: FieldRef<"Policy", 'Int'>
    readonly riskPoolId: FieldRef<"Policy", 'Int'>
    readonly coverageAmount: FieldRef<"Policy", 'Decimal'>
    readonly premiumAmount: FieldRef<"Policy", 'Decimal'>
    readonly coverageStart: FieldRef<"Policy", 'DateTime'>
    readonly coverageEnd: FieldRef<"Policy", 'DateTime'>
    readonly status: FieldRef<"Policy", 'String'>
    readonly createdAt: FieldRef<"Policy", 'DateTime'>
    readonly updatedAt: FieldRef<"Policy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
  }

  /**
   * Policy.policyTriggers
   */
  export type Policy$policyTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    where?: PolicyTriggerWhereInput
    orderBy?: PolicyTriggerOrderByWithRelationInput | PolicyTriggerOrderByWithRelationInput[]
    cursor?: PolicyTriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyTriggerScalarFieldEnum | PolicyTriggerScalarFieldEnum[]
  }

  /**
   * Policy.payments
   */
  export type Policy$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Policy.payouts
   */
  export type Policy$payoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    cursor?: PayoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
  }


  /**
   * Model OracleSource
   */

  export type AggregateOracleSource = {
    _count: OracleSourceCountAggregateOutputType | null
    _avg: OracleSourceAvgAggregateOutputType | null
    _sum: OracleSourceSumAggregateOutputType | null
    _min: OracleSourceMinAggregateOutputType | null
    _max: OracleSourceMaxAggregateOutputType | null
  }

  export type OracleSourceAvgAggregateOutputType = {
    id: number | null
  }

  export type OracleSourceSumAggregateOutputType = {
    id: number | null
  }

  export type OracleSourceMinAggregateOutputType = {
    id: number | null
    name: string | null
    sourceType: string | null
    endpoint: string | null
    createdAt: Date | null
  }

  export type OracleSourceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sourceType: string | null
    endpoint: string | null
    createdAt: Date | null
  }

  export type OracleSourceCountAggregateOutputType = {
    id: number
    name: number
    sourceType: number
    endpoint: number
    createdAt: number
    _all: number
  }


  export type OracleSourceAvgAggregateInputType = {
    id?: true
  }

  export type OracleSourceSumAggregateInputType = {
    id?: true
  }

  export type OracleSourceMinAggregateInputType = {
    id?: true
    name?: true
    sourceType?: true
    endpoint?: true
    createdAt?: true
  }

  export type OracleSourceMaxAggregateInputType = {
    id?: true
    name?: true
    sourceType?: true
    endpoint?: true
    createdAt?: true
  }

  export type OracleSourceCountAggregateInputType = {
    id?: true
    name?: true
    sourceType?: true
    endpoint?: true
    createdAt?: true
    _all?: true
  }

  export type OracleSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OracleSource to aggregate.
     */
    where?: OracleSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OracleSources to fetch.
     */
    orderBy?: OracleSourceOrderByWithRelationInput | OracleSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OracleSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OracleSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OracleSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OracleSources
    **/
    _count?: true | OracleSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OracleSourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OracleSourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OracleSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OracleSourceMaxAggregateInputType
  }

  export type GetOracleSourceAggregateType<T extends OracleSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateOracleSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOracleSource[P]>
      : GetScalarType<T[P], AggregateOracleSource[P]>
  }




  export type OracleSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OracleSourceWhereInput
    orderBy?: OracleSourceOrderByWithAggregationInput | OracleSourceOrderByWithAggregationInput[]
    by: OracleSourceScalarFieldEnum[] | OracleSourceScalarFieldEnum
    having?: OracleSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OracleSourceCountAggregateInputType | true
    _avg?: OracleSourceAvgAggregateInputType
    _sum?: OracleSourceSumAggregateInputType
    _min?: OracleSourceMinAggregateInputType
    _max?: OracleSourceMaxAggregateInputType
  }

  export type OracleSourceGroupByOutputType = {
    id: number
    name: string
    sourceType: string | null
    endpoint: string | null
    createdAt: Date
    _count: OracleSourceCountAggregateOutputType | null
    _avg: OracleSourceAvgAggregateOutputType | null
    _sum: OracleSourceSumAggregateOutputType | null
    _min: OracleSourceMinAggregateOutputType | null
    _max: OracleSourceMaxAggregateOutputType | null
  }

  type GetOracleSourceGroupByPayload<T extends OracleSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OracleSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OracleSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OracleSourceGroupByOutputType[P]>
            : GetScalarType<T[P], OracleSourceGroupByOutputType[P]>
        }
      >
    >


  export type OracleSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceType?: boolean
    endpoint?: boolean
    createdAt?: boolean
    oracleData?: boolean | OracleSource$oracleDataArgs<ExtArgs>
    _count?: boolean | OracleSourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oracleSource"]>

  export type OracleSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceType?: boolean
    endpoint?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oracleSource"]>

  export type OracleSourceSelectScalar = {
    id?: boolean
    name?: boolean
    sourceType?: boolean
    endpoint?: boolean
    createdAt?: boolean
  }

  export type OracleSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oracleData?: boolean | OracleSource$oracleDataArgs<ExtArgs>
    _count?: boolean | OracleSourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OracleSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OracleSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OracleSource"
    objects: {
      oracleData: Prisma.$OracleDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sourceType: string | null
      endpoint: string | null
      createdAt: Date
    }, ExtArgs["result"]["oracleSource"]>
    composites: {}
  }

  type OracleSourceGetPayload<S extends boolean | null | undefined | OracleSourceDefaultArgs> = $Result.GetResult<Prisma.$OracleSourcePayload, S>

  type OracleSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OracleSourceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OracleSourceCountAggregateInputType | true
    }

  export interface OracleSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OracleSource'], meta: { name: 'OracleSource' } }
    /**
     * Find zero or one OracleSource that matches the filter.
     * @param {OracleSourceFindUniqueArgs} args - Arguments to find a OracleSource
     * @example
     * // Get one OracleSource
     * const oracleSource = await prisma.oracleSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OracleSourceFindUniqueArgs>(args: SelectSubset<T, OracleSourceFindUniqueArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OracleSource that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OracleSourceFindUniqueOrThrowArgs} args - Arguments to find a OracleSource
     * @example
     * // Get one OracleSource
     * const oracleSource = await prisma.oracleSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OracleSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, OracleSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OracleSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleSourceFindFirstArgs} args - Arguments to find a OracleSource
     * @example
     * // Get one OracleSource
     * const oracleSource = await prisma.oracleSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OracleSourceFindFirstArgs>(args?: SelectSubset<T, OracleSourceFindFirstArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OracleSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleSourceFindFirstOrThrowArgs} args - Arguments to find a OracleSource
     * @example
     * // Get one OracleSource
     * const oracleSource = await prisma.oracleSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OracleSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, OracleSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OracleSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OracleSources
     * const oracleSources = await prisma.oracleSource.findMany()
     * 
     * // Get first 10 OracleSources
     * const oracleSources = await prisma.oracleSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oracleSourceWithIdOnly = await prisma.oracleSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OracleSourceFindManyArgs>(args?: SelectSubset<T, OracleSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OracleSource.
     * @param {OracleSourceCreateArgs} args - Arguments to create a OracleSource.
     * @example
     * // Create one OracleSource
     * const OracleSource = await prisma.oracleSource.create({
     *   data: {
     *     // ... data to create a OracleSource
     *   }
     * })
     * 
     */
    create<T extends OracleSourceCreateArgs>(args: SelectSubset<T, OracleSourceCreateArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OracleSources.
     * @param {OracleSourceCreateManyArgs} args - Arguments to create many OracleSources.
     * @example
     * // Create many OracleSources
     * const oracleSource = await prisma.oracleSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OracleSourceCreateManyArgs>(args?: SelectSubset<T, OracleSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OracleSources and returns the data saved in the database.
     * @param {OracleSourceCreateManyAndReturnArgs} args - Arguments to create many OracleSources.
     * @example
     * // Create many OracleSources
     * const oracleSource = await prisma.oracleSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OracleSources and only return the `id`
     * const oracleSourceWithIdOnly = await prisma.oracleSource.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OracleSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, OracleSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OracleSource.
     * @param {OracleSourceDeleteArgs} args - Arguments to delete one OracleSource.
     * @example
     * // Delete one OracleSource
     * const OracleSource = await prisma.oracleSource.delete({
     *   where: {
     *     // ... filter to delete one OracleSource
     *   }
     * })
     * 
     */
    delete<T extends OracleSourceDeleteArgs>(args: SelectSubset<T, OracleSourceDeleteArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OracleSource.
     * @param {OracleSourceUpdateArgs} args - Arguments to update one OracleSource.
     * @example
     * // Update one OracleSource
     * const oracleSource = await prisma.oracleSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OracleSourceUpdateArgs>(args: SelectSubset<T, OracleSourceUpdateArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OracleSources.
     * @param {OracleSourceDeleteManyArgs} args - Arguments to filter OracleSources to delete.
     * @example
     * // Delete a few OracleSources
     * const { count } = await prisma.oracleSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OracleSourceDeleteManyArgs>(args?: SelectSubset<T, OracleSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OracleSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OracleSources
     * const oracleSource = await prisma.oracleSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OracleSourceUpdateManyArgs>(args: SelectSubset<T, OracleSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OracleSource.
     * @param {OracleSourceUpsertArgs} args - Arguments to update or create a OracleSource.
     * @example
     * // Update or create a OracleSource
     * const oracleSource = await prisma.oracleSource.upsert({
     *   create: {
     *     // ... data to create a OracleSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OracleSource we want to update
     *   }
     * })
     */
    upsert<T extends OracleSourceUpsertArgs>(args: SelectSubset<T, OracleSourceUpsertArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OracleSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleSourceCountArgs} args - Arguments to filter OracleSources to count.
     * @example
     * // Count the number of OracleSources
     * const count = await prisma.oracleSource.count({
     *   where: {
     *     // ... the filter for the OracleSources we want to count
     *   }
     * })
    **/
    count<T extends OracleSourceCountArgs>(
      args?: Subset<T, OracleSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OracleSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OracleSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OracleSourceAggregateArgs>(args: Subset<T, OracleSourceAggregateArgs>): Prisma.PrismaPromise<GetOracleSourceAggregateType<T>>

    /**
     * Group by OracleSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleSourceGroupByArgs} args - Group by arguments.
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
      T extends OracleSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OracleSourceGroupByArgs['orderBy'] }
        : { orderBy?: OracleSourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OracleSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOracleSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OracleSource model
   */
  readonly fields: OracleSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OracleSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OracleSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    oracleData<T extends OracleSource$oracleDataArgs<ExtArgs> = {}>(args?: Subset<T, OracleSource$oracleDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the OracleSource model
   */ 
  interface OracleSourceFieldRefs {
    readonly id: FieldRef<"OracleSource", 'Int'>
    readonly name: FieldRef<"OracleSource", 'String'>
    readonly sourceType: FieldRef<"OracleSource", 'String'>
    readonly endpoint: FieldRef<"OracleSource", 'String'>
    readonly createdAt: FieldRef<"OracleSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OracleSource findUnique
   */
  export type OracleSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * Filter, which OracleSource to fetch.
     */
    where: OracleSourceWhereUniqueInput
  }

  /**
   * OracleSource findUniqueOrThrow
   */
  export type OracleSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * Filter, which OracleSource to fetch.
     */
    where: OracleSourceWhereUniqueInput
  }

  /**
   * OracleSource findFirst
   */
  export type OracleSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * Filter, which OracleSource to fetch.
     */
    where?: OracleSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OracleSources to fetch.
     */
    orderBy?: OracleSourceOrderByWithRelationInput | OracleSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OracleSources.
     */
    cursor?: OracleSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OracleSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OracleSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OracleSources.
     */
    distinct?: OracleSourceScalarFieldEnum | OracleSourceScalarFieldEnum[]
  }

  /**
   * OracleSource findFirstOrThrow
   */
  export type OracleSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * Filter, which OracleSource to fetch.
     */
    where?: OracleSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OracleSources to fetch.
     */
    orderBy?: OracleSourceOrderByWithRelationInput | OracleSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OracleSources.
     */
    cursor?: OracleSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OracleSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OracleSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OracleSources.
     */
    distinct?: OracleSourceScalarFieldEnum | OracleSourceScalarFieldEnum[]
  }

  /**
   * OracleSource findMany
   */
  export type OracleSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * Filter, which OracleSources to fetch.
     */
    where?: OracleSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OracleSources to fetch.
     */
    orderBy?: OracleSourceOrderByWithRelationInput | OracleSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OracleSources.
     */
    cursor?: OracleSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OracleSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OracleSources.
     */
    skip?: number
    distinct?: OracleSourceScalarFieldEnum | OracleSourceScalarFieldEnum[]
  }

  /**
   * OracleSource create
   */
  export type OracleSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a OracleSource.
     */
    data: XOR<OracleSourceCreateInput, OracleSourceUncheckedCreateInput>
  }

  /**
   * OracleSource createMany
   */
  export type OracleSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OracleSources.
     */
    data: OracleSourceCreateManyInput | OracleSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OracleSource createManyAndReturn
   */
  export type OracleSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OracleSources.
     */
    data: OracleSourceCreateManyInput | OracleSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OracleSource update
   */
  export type OracleSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a OracleSource.
     */
    data: XOR<OracleSourceUpdateInput, OracleSourceUncheckedUpdateInput>
    /**
     * Choose, which OracleSource to update.
     */
    where: OracleSourceWhereUniqueInput
  }

  /**
   * OracleSource updateMany
   */
  export type OracleSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OracleSources.
     */
    data: XOR<OracleSourceUpdateManyMutationInput, OracleSourceUncheckedUpdateManyInput>
    /**
     * Filter which OracleSources to update
     */
    where?: OracleSourceWhereInput
  }

  /**
   * OracleSource upsert
   */
  export type OracleSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the OracleSource to update in case it exists.
     */
    where: OracleSourceWhereUniqueInput
    /**
     * In case the OracleSource found by the `where` argument doesn't exist, create a new OracleSource with this data.
     */
    create: XOR<OracleSourceCreateInput, OracleSourceUncheckedCreateInput>
    /**
     * In case the OracleSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OracleSourceUpdateInput, OracleSourceUncheckedUpdateInput>
  }

  /**
   * OracleSource delete
   */
  export type OracleSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
    /**
     * Filter which OracleSource to delete.
     */
    where: OracleSourceWhereUniqueInput
  }

  /**
   * OracleSource deleteMany
   */
  export type OracleSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OracleSources to delete
     */
    where?: OracleSourceWhereInput
  }

  /**
   * OracleSource.oracleData
   */
  export type OracleSource$oracleDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    where?: OracleDataWhereInput
    orderBy?: OracleDataOrderByWithRelationInput | OracleDataOrderByWithRelationInput[]
    cursor?: OracleDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OracleDataScalarFieldEnum | OracleDataScalarFieldEnum[]
  }

  /**
   * OracleSource without action
   */
  export type OracleSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleSource
     */
    select?: OracleSourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleSourceInclude<ExtArgs> | null
  }


  /**
   * Model OracleData
   */

  export type AggregateOracleData = {
    _count: OracleDataCountAggregateOutputType | null
    _avg: OracleDataAvgAggregateOutputType | null
    _sum: OracleDataSumAggregateOutputType | null
    _min: OracleDataMinAggregateOutputType | null
    _max: OracleDataMaxAggregateOutputType | null
  }

  export type OracleDataAvgAggregateOutputType = {
    id: number | null
    oracleSourceId: number | null
  }

  export type OracleDataSumAggregateOutputType = {
    id: number | null
    oracleSourceId: number | null
  }

  export type OracleDataMinAggregateOutputType = {
    id: number | null
    oracleSourceId: number | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type OracleDataMaxAggregateOutputType = {
    id: number | null
    oracleSourceId: number | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type OracleDataCountAggregateOutputType = {
    id: number
    oracleSourceId: number
    timestamp: number
    data: number
    createdAt: number
    _all: number
  }


  export type OracleDataAvgAggregateInputType = {
    id?: true
    oracleSourceId?: true
  }

  export type OracleDataSumAggregateInputType = {
    id?: true
    oracleSourceId?: true
  }

  export type OracleDataMinAggregateInputType = {
    id?: true
    oracleSourceId?: true
    timestamp?: true
    createdAt?: true
  }

  export type OracleDataMaxAggregateInputType = {
    id?: true
    oracleSourceId?: true
    timestamp?: true
    createdAt?: true
  }

  export type OracleDataCountAggregateInputType = {
    id?: true
    oracleSourceId?: true
    timestamp?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type OracleDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OracleData to aggregate.
     */
    where?: OracleDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OracleData to fetch.
     */
    orderBy?: OracleDataOrderByWithRelationInput | OracleDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OracleDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OracleData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OracleData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OracleData
    **/
    _count?: true | OracleDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OracleDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OracleDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OracleDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OracleDataMaxAggregateInputType
  }

  export type GetOracleDataAggregateType<T extends OracleDataAggregateArgs> = {
        [P in keyof T & keyof AggregateOracleData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOracleData[P]>
      : GetScalarType<T[P], AggregateOracleData[P]>
  }




  export type OracleDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OracleDataWhereInput
    orderBy?: OracleDataOrderByWithAggregationInput | OracleDataOrderByWithAggregationInput[]
    by: OracleDataScalarFieldEnum[] | OracleDataScalarFieldEnum
    having?: OracleDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OracleDataCountAggregateInputType | true
    _avg?: OracleDataAvgAggregateInputType
    _sum?: OracleDataSumAggregateInputType
    _min?: OracleDataMinAggregateInputType
    _max?: OracleDataMaxAggregateInputType
  }

  export type OracleDataGroupByOutputType = {
    id: number
    oracleSourceId: number
    timestamp: Date
    data: JsonValue
    createdAt: Date
    _count: OracleDataCountAggregateOutputType | null
    _avg: OracleDataAvgAggregateOutputType | null
    _sum: OracleDataSumAggregateOutputType | null
    _min: OracleDataMinAggregateOutputType | null
    _max: OracleDataMaxAggregateOutputType | null
  }

  type GetOracleDataGroupByPayload<T extends OracleDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OracleDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OracleDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OracleDataGroupByOutputType[P]>
            : GetScalarType<T[P], OracleDataGroupByOutputType[P]>
        }
      >
    >


  export type OracleDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oracleSourceId?: boolean
    timestamp?: boolean
    data?: boolean
    createdAt?: boolean
    oracleSource?: boolean | OracleSourceDefaultArgs<ExtArgs>
    policyTriggers?: boolean | OracleData$policyTriggersArgs<ExtArgs>
    _count?: boolean | OracleDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oracleData"]>

  export type OracleDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oracleSourceId?: boolean
    timestamp?: boolean
    data?: boolean
    createdAt?: boolean
    oracleSource?: boolean | OracleSourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oracleData"]>

  export type OracleDataSelectScalar = {
    id?: boolean
    oracleSourceId?: boolean
    timestamp?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type OracleDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oracleSource?: boolean | OracleSourceDefaultArgs<ExtArgs>
    policyTriggers?: boolean | OracleData$policyTriggersArgs<ExtArgs>
    _count?: boolean | OracleDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OracleDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oracleSource?: boolean | OracleSourceDefaultArgs<ExtArgs>
  }

  export type $OracleDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OracleData"
    objects: {
      oracleSource: Prisma.$OracleSourcePayload<ExtArgs>
      policyTriggers: Prisma.$PolicyTriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      oracleSourceId: number
      timestamp: Date
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["oracleData"]>
    composites: {}
  }

  type OracleDataGetPayload<S extends boolean | null | undefined | OracleDataDefaultArgs> = $Result.GetResult<Prisma.$OracleDataPayload, S>

  type OracleDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OracleDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OracleDataCountAggregateInputType | true
    }

  export interface OracleDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OracleData'], meta: { name: 'OracleData' } }
    /**
     * Find zero or one OracleData that matches the filter.
     * @param {OracleDataFindUniqueArgs} args - Arguments to find a OracleData
     * @example
     * // Get one OracleData
     * const oracleData = await prisma.oracleData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OracleDataFindUniqueArgs>(args: SelectSubset<T, OracleDataFindUniqueArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OracleData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OracleDataFindUniqueOrThrowArgs} args - Arguments to find a OracleData
     * @example
     * // Get one OracleData
     * const oracleData = await prisma.oracleData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OracleDataFindUniqueOrThrowArgs>(args: SelectSubset<T, OracleDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OracleData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleDataFindFirstArgs} args - Arguments to find a OracleData
     * @example
     * // Get one OracleData
     * const oracleData = await prisma.oracleData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OracleDataFindFirstArgs>(args?: SelectSubset<T, OracleDataFindFirstArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OracleData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleDataFindFirstOrThrowArgs} args - Arguments to find a OracleData
     * @example
     * // Get one OracleData
     * const oracleData = await prisma.oracleData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OracleDataFindFirstOrThrowArgs>(args?: SelectSubset<T, OracleDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OracleData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OracleData
     * const oracleData = await prisma.oracleData.findMany()
     * 
     * // Get first 10 OracleData
     * const oracleData = await prisma.oracleData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oracleDataWithIdOnly = await prisma.oracleData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OracleDataFindManyArgs>(args?: SelectSubset<T, OracleDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OracleData.
     * @param {OracleDataCreateArgs} args - Arguments to create a OracleData.
     * @example
     * // Create one OracleData
     * const OracleData = await prisma.oracleData.create({
     *   data: {
     *     // ... data to create a OracleData
     *   }
     * })
     * 
     */
    create<T extends OracleDataCreateArgs>(args: SelectSubset<T, OracleDataCreateArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OracleData.
     * @param {OracleDataCreateManyArgs} args - Arguments to create many OracleData.
     * @example
     * // Create many OracleData
     * const oracleData = await prisma.oracleData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OracleDataCreateManyArgs>(args?: SelectSubset<T, OracleDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OracleData and returns the data saved in the database.
     * @param {OracleDataCreateManyAndReturnArgs} args - Arguments to create many OracleData.
     * @example
     * // Create many OracleData
     * const oracleData = await prisma.oracleData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OracleData and only return the `id`
     * const oracleDataWithIdOnly = await prisma.oracleData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OracleDataCreateManyAndReturnArgs>(args?: SelectSubset<T, OracleDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OracleData.
     * @param {OracleDataDeleteArgs} args - Arguments to delete one OracleData.
     * @example
     * // Delete one OracleData
     * const OracleData = await prisma.oracleData.delete({
     *   where: {
     *     // ... filter to delete one OracleData
     *   }
     * })
     * 
     */
    delete<T extends OracleDataDeleteArgs>(args: SelectSubset<T, OracleDataDeleteArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OracleData.
     * @param {OracleDataUpdateArgs} args - Arguments to update one OracleData.
     * @example
     * // Update one OracleData
     * const oracleData = await prisma.oracleData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OracleDataUpdateArgs>(args: SelectSubset<T, OracleDataUpdateArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OracleData.
     * @param {OracleDataDeleteManyArgs} args - Arguments to filter OracleData to delete.
     * @example
     * // Delete a few OracleData
     * const { count } = await prisma.oracleData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OracleDataDeleteManyArgs>(args?: SelectSubset<T, OracleDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OracleData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OracleData
     * const oracleData = await prisma.oracleData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OracleDataUpdateManyArgs>(args: SelectSubset<T, OracleDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OracleData.
     * @param {OracleDataUpsertArgs} args - Arguments to update or create a OracleData.
     * @example
     * // Update or create a OracleData
     * const oracleData = await prisma.oracleData.upsert({
     *   create: {
     *     // ... data to create a OracleData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OracleData we want to update
     *   }
     * })
     */
    upsert<T extends OracleDataUpsertArgs>(args: SelectSubset<T, OracleDataUpsertArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OracleData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleDataCountArgs} args - Arguments to filter OracleData to count.
     * @example
     * // Count the number of OracleData
     * const count = await prisma.oracleData.count({
     *   where: {
     *     // ... the filter for the OracleData we want to count
     *   }
     * })
    **/
    count<T extends OracleDataCountArgs>(
      args?: Subset<T, OracleDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OracleDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OracleData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OracleDataAggregateArgs>(args: Subset<T, OracleDataAggregateArgs>): Prisma.PrismaPromise<GetOracleDataAggregateType<T>>

    /**
     * Group by OracleData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OracleDataGroupByArgs} args - Group by arguments.
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
      T extends OracleDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OracleDataGroupByArgs['orderBy'] }
        : { orderBy?: OracleDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OracleDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOracleDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OracleData model
   */
  readonly fields: OracleDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OracleData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OracleDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    oracleSource<T extends OracleSourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OracleSourceDefaultArgs<ExtArgs>>): Prisma__OracleSourceClient<$Result.GetResult<Prisma.$OracleSourcePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    policyTriggers<T extends OracleData$policyTriggersArgs<ExtArgs> = {}>(args?: Subset<T, OracleData$policyTriggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the OracleData model
   */ 
  interface OracleDataFieldRefs {
    readonly id: FieldRef<"OracleData", 'Int'>
    readonly oracleSourceId: FieldRef<"OracleData", 'Int'>
    readonly timestamp: FieldRef<"OracleData", 'DateTime'>
    readonly data: FieldRef<"OracleData", 'Json'>
    readonly createdAt: FieldRef<"OracleData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OracleData findUnique
   */
  export type OracleDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * Filter, which OracleData to fetch.
     */
    where: OracleDataWhereUniqueInput
  }

  /**
   * OracleData findUniqueOrThrow
   */
  export type OracleDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * Filter, which OracleData to fetch.
     */
    where: OracleDataWhereUniqueInput
  }

  /**
   * OracleData findFirst
   */
  export type OracleDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * Filter, which OracleData to fetch.
     */
    where?: OracleDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OracleData to fetch.
     */
    orderBy?: OracleDataOrderByWithRelationInput | OracleDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OracleData.
     */
    cursor?: OracleDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OracleData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OracleData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OracleData.
     */
    distinct?: OracleDataScalarFieldEnum | OracleDataScalarFieldEnum[]
  }

  /**
   * OracleData findFirstOrThrow
   */
  export type OracleDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * Filter, which OracleData to fetch.
     */
    where?: OracleDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OracleData to fetch.
     */
    orderBy?: OracleDataOrderByWithRelationInput | OracleDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OracleData.
     */
    cursor?: OracleDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OracleData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OracleData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OracleData.
     */
    distinct?: OracleDataScalarFieldEnum | OracleDataScalarFieldEnum[]
  }

  /**
   * OracleData findMany
   */
  export type OracleDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * Filter, which OracleData to fetch.
     */
    where?: OracleDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OracleData to fetch.
     */
    orderBy?: OracleDataOrderByWithRelationInput | OracleDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OracleData.
     */
    cursor?: OracleDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OracleData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OracleData.
     */
    skip?: number
    distinct?: OracleDataScalarFieldEnum | OracleDataScalarFieldEnum[]
  }

  /**
   * OracleData create
   */
  export type OracleDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * The data needed to create a OracleData.
     */
    data: XOR<OracleDataCreateInput, OracleDataUncheckedCreateInput>
  }

  /**
   * OracleData createMany
   */
  export type OracleDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OracleData.
     */
    data: OracleDataCreateManyInput | OracleDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OracleData createManyAndReturn
   */
  export type OracleDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OracleData.
     */
    data: OracleDataCreateManyInput | OracleDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OracleData update
   */
  export type OracleDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * The data needed to update a OracleData.
     */
    data: XOR<OracleDataUpdateInput, OracleDataUncheckedUpdateInput>
    /**
     * Choose, which OracleData to update.
     */
    where: OracleDataWhereUniqueInput
  }

  /**
   * OracleData updateMany
   */
  export type OracleDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OracleData.
     */
    data: XOR<OracleDataUpdateManyMutationInput, OracleDataUncheckedUpdateManyInput>
    /**
     * Filter which OracleData to update
     */
    where?: OracleDataWhereInput
  }

  /**
   * OracleData upsert
   */
  export type OracleDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * The filter to search for the OracleData to update in case it exists.
     */
    where: OracleDataWhereUniqueInput
    /**
     * In case the OracleData found by the `where` argument doesn't exist, create a new OracleData with this data.
     */
    create: XOR<OracleDataCreateInput, OracleDataUncheckedCreateInput>
    /**
     * In case the OracleData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OracleDataUpdateInput, OracleDataUncheckedUpdateInput>
  }

  /**
   * OracleData delete
   */
  export type OracleDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
    /**
     * Filter which OracleData to delete.
     */
    where: OracleDataWhereUniqueInput
  }

  /**
   * OracleData deleteMany
   */
  export type OracleDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OracleData to delete
     */
    where?: OracleDataWhereInput
  }

  /**
   * OracleData.policyTriggers
   */
  export type OracleData$policyTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    where?: PolicyTriggerWhereInput
    orderBy?: PolicyTriggerOrderByWithRelationInput | PolicyTriggerOrderByWithRelationInput[]
    cursor?: PolicyTriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyTriggerScalarFieldEnum | PolicyTriggerScalarFieldEnum[]
  }

  /**
   * OracleData without action
   */
  export type OracleDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OracleData
     */
    select?: OracleDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OracleDataInclude<ExtArgs> | null
  }


  /**
   * Model PolicyTrigger
   */

  export type AggregatePolicyTrigger = {
    _count: PolicyTriggerCountAggregateOutputType | null
    _avg: PolicyTriggerAvgAggregateOutputType | null
    _sum: PolicyTriggerSumAggregateOutputType | null
    _min: PolicyTriggerMinAggregateOutputType | null
    _max: PolicyTriggerMaxAggregateOutputType | null
  }

  export type PolicyTriggerAvgAggregateOutputType = {
    id: number | null
    policyId: number | null
    oracleDataId: number | null
    payoutId: number | null
  }

  export type PolicyTriggerSumAggregateOutputType = {
    id: number | null
    policyId: number | null
    oracleDataId: number | null
    payoutId: number | null
  }

  export type PolicyTriggerMinAggregateOutputType = {
    id: number | null
    policyId: number | null
    oracleDataId: number | null
    triggered: boolean | null
    triggerCheckedAt: Date | null
    payoutId: number | null
  }

  export type PolicyTriggerMaxAggregateOutputType = {
    id: number | null
    policyId: number | null
    oracleDataId: number | null
    triggered: boolean | null
    triggerCheckedAt: Date | null
    payoutId: number | null
  }

  export type PolicyTriggerCountAggregateOutputType = {
    id: number
    policyId: number
    oracleDataId: number
    triggered: number
    triggerCheckedAt: number
    payoutId: number
    _all: number
  }


  export type PolicyTriggerAvgAggregateInputType = {
    id?: true
    policyId?: true
    oracleDataId?: true
    payoutId?: true
  }

  export type PolicyTriggerSumAggregateInputType = {
    id?: true
    policyId?: true
    oracleDataId?: true
    payoutId?: true
  }

  export type PolicyTriggerMinAggregateInputType = {
    id?: true
    policyId?: true
    oracleDataId?: true
    triggered?: true
    triggerCheckedAt?: true
    payoutId?: true
  }

  export type PolicyTriggerMaxAggregateInputType = {
    id?: true
    policyId?: true
    oracleDataId?: true
    triggered?: true
    triggerCheckedAt?: true
    payoutId?: true
  }

  export type PolicyTriggerCountAggregateInputType = {
    id?: true
    policyId?: true
    oracleDataId?: true
    triggered?: true
    triggerCheckedAt?: true
    payoutId?: true
    _all?: true
  }

  export type PolicyTriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyTrigger to aggregate.
     */
    where?: PolicyTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTriggers to fetch.
     */
    orderBy?: PolicyTriggerOrderByWithRelationInput | PolicyTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicyTriggers
    **/
    _count?: true | PolicyTriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyTriggerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicyTriggerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyTriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyTriggerMaxAggregateInputType
  }

  export type GetPolicyTriggerAggregateType<T extends PolicyTriggerAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicyTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicyTrigger[P]>
      : GetScalarType<T[P], AggregatePolicyTrigger[P]>
  }




  export type PolicyTriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyTriggerWhereInput
    orderBy?: PolicyTriggerOrderByWithAggregationInput | PolicyTriggerOrderByWithAggregationInput[]
    by: PolicyTriggerScalarFieldEnum[] | PolicyTriggerScalarFieldEnum
    having?: PolicyTriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyTriggerCountAggregateInputType | true
    _avg?: PolicyTriggerAvgAggregateInputType
    _sum?: PolicyTriggerSumAggregateInputType
    _min?: PolicyTriggerMinAggregateInputType
    _max?: PolicyTriggerMaxAggregateInputType
  }

  export type PolicyTriggerGroupByOutputType = {
    id: number
    policyId: number
    oracleDataId: number
    triggered: boolean
    triggerCheckedAt: Date
    payoutId: number | null
    _count: PolicyTriggerCountAggregateOutputType | null
    _avg: PolicyTriggerAvgAggregateOutputType | null
    _sum: PolicyTriggerSumAggregateOutputType | null
    _min: PolicyTriggerMinAggregateOutputType | null
    _max: PolicyTriggerMaxAggregateOutputType | null
  }

  type GetPolicyTriggerGroupByPayload<T extends PolicyTriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyTriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyTriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyTriggerGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyTriggerGroupByOutputType[P]>
        }
      >
    >


  export type PolicyTriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    oracleDataId?: boolean
    triggered?: boolean
    triggerCheckedAt?: boolean
    payoutId?: boolean
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
    oracleData?: boolean | OracleDataDefaultArgs<ExtArgs>
    payout?: boolean | PolicyTrigger$payoutArgs<ExtArgs>
  }, ExtArgs["result"]["policyTrigger"]>

  export type PolicyTriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    oracleDataId?: boolean
    triggered?: boolean
    triggerCheckedAt?: boolean
    payoutId?: boolean
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
    oracleData?: boolean | OracleDataDefaultArgs<ExtArgs>
    payout?: boolean | PolicyTrigger$payoutArgs<ExtArgs>
  }, ExtArgs["result"]["policyTrigger"]>

  export type PolicyTriggerSelectScalar = {
    id?: boolean
    policyId?: boolean
    oracleDataId?: boolean
    triggered?: boolean
    triggerCheckedAt?: boolean
    payoutId?: boolean
  }

  export type PolicyTriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
    oracleData?: boolean | OracleDataDefaultArgs<ExtArgs>
    payout?: boolean | PolicyTrigger$payoutArgs<ExtArgs>
  }
  export type PolicyTriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
    oracleData?: boolean | OracleDataDefaultArgs<ExtArgs>
    payout?: boolean | PolicyTrigger$payoutArgs<ExtArgs>
  }

  export type $PolicyTriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolicyTrigger"
    objects: {
      policy: Prisma.$PolicyPayload<ExtArgs>
      oracleData: Prisma.$OracleDataPayload<ExtArgs>
      payout: Prisma.$PayoutPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      policyId: number
      oracleDataId: number
      triggered: boolean
      triggerCheckedAt: Date
      payoutId: number | null
    }, ExtArgs["result"]["policyTrigger"]>
    composites: {}
  }

  type PolicyTriggerGetPayload<S extends boolean | null | undefined | PolicyTriggerDefaultArgs> = $Result.GetResult<Prisma.$PolicyTriggerPayload, S>

  type PolicyTriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PolicyTriggerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PolicyTriggerCountAggregateInputType | true
    }

  export interface PolicyTriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolicyTrigger'], meta: { name: 'PolicyTrigger' } }
    /**
     * Find zero or one PolicyTrigger that matches the filter.
     * @param {PolicyTriggerFindUniqueArgs} args - Arguments to find a PolicyTrigger
     * @example
     * // Get one PolicyTrigger
     * const policyTrigger = await prisma.policyTrigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyTriggerFindUniqueArgs>(args: SelectSubset<T, PolicyTriggerFindUniqueArgs<ExtArgs>>): Prisma__PolicyTriggerClient<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PolicyTrigger that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PolicyTriggerFindUniqueOrThrowArgs} args - Arguments to find a PolicyTrigger
     * @example
     * // Get one PolicyTrigger
     * const policyTrigger = await prisma.policyTrigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyTriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyTriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyTriggerClient<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PolicyTrigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTriggerFindFirstArgs} args - Arguments to find a PolicyTrigger
     * @example
     * // Get one PolicyTrigger
     * const policyTrigger = await prisma.policyTrigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyTriggerFindFirstArgs>(args?: SelectSubset<T, PolicyTriggerFindFirstArgs<ExtArgs>>): Prisma__PolicyTriggerClient<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PolicyTrigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTriggerFindFirstOrThrowArgs} args - Arguments to find a PolicyTrigger
     * @example
     * // Get one PolicyTrigger
     * const policyTrigger = await prisma.policyTrigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyTriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyTriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyTriggerClient<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PolicyTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicyTriggers
     * const policyTriggers = await prisma.policyTrigger.findMany()
     * 
     * // Get first 10 PolicyTriggers
     * const policyTriggers = await prisma.policyTrigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyTriggerWithIdOnly = await prisma.policyTrigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyTriggerFindManyArgs>(args?: SelectSubset<T, PolicyTriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PolicyTrigger.
     * @param {PolicyTriggerCreateArgs} args - Arguments to create a PolicyTrigger.
     * @example
     * // Create one PolicyTrigger
     * const PolicyTrigger = await prisma.policyTrigger.create({
     *   data: {
     *     // ... data to create a PolicyTrigger
     *   }
     * })
     * 
     */
    create<T extends PolicyTriggerCreateArgs>(args: SelectSubset<T, PolicyTriggerCreateArgs<ExtArgs>>): Prisma__PolicyTriggerClient<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PolicyTriggers.
     * @param {PolicyTriggerCreateManyArgs} args - Arguments to create many PolicyTriggers.
     * @example
     * // Create many PolicyTriggers
     * const policyTrigger = await prisma.policyTrigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyTriggerCreateManyArgs>(args?: SelectSubset<T, PolicyTriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolicyTriggers and returns the data saved in the database.
     * @param {PolicyTriggerCreateManyAndReturnArgs} args - Arguments to create many PolicyTriggers.
     * @example
     * // Create many PolicyTriggers
     * const policyTrigger = await prisma.policyTrigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolicyTriggers and only return the `id`
     * const policyTriggerWithIdOnly = await prisma.policyTrigger.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyTriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyTriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PolicyTrigger.
     * @param {PolicyTriggerDeleteArgs} args - Arguments to delete one PolicyTrigger.
     * @example
     * // Delete one PolicyTrigger
     * const PolicyTrigger = await prisma.policyTrigger.delete({
     *   where: {
     *     // ... filter to delete one PolicyTrigger
     *   }
     * })
     * 
     */
    delete<T extends PolicyTriggerDeleteArgs>(args: SelectSubset<T, PolicyTriggerDeleteArgs<ExtArgs>>): Prisma__PolicyTriggerClient<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PolicyTrigger.
     * @param {PolicyTriggerUpdateArgs} args - Arguments to update one PolicyTrigger.
     * @example
     * // Update one PolicyTrigger
     * const policyTrigger = await prisma.policyTrigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyTriggerUpdateArgs>(args: SelectSubset<T, PolicyTriggerUpdateArgs<ExtArgs>>): Prisma__PolicyTriggerClient<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PolicyTriggers.
     * @param {PolicyTriggerDeleteManyArgs} args - Arguments to filter PolicyTriggers to delete.
     * @example
     * // Delete a few PolicyTriggers
     * const { count } = await prisma.policyTrigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyTriggerDeleteManyArgs>(args?: SelectSubset<T, PolicyTriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicyTriggers
     * const policyTrigger = await prisma.policyTrigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyTriggerUpdateManyArgs>(args: SelectSubset<T, PolicyTriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PolicyTrigger.
     * @param {PolicyTriggerUpsertArgs} args - Arguments to update or create a PolicyTrigger.
     * @example
     * // Update or create a PolicyTrigger
     * const policyTrigger = await prisma.policyTrigger.upsert({
     *   create: {
     *     // ... data to create a PolicyTrigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicyTrigger we want to update
     *   }
     * })
     */
    upsert<T extends PolicyTriggerUpsertArgs>(args: SelectSubset<T, PolicyTriggerUpsertArgs<ExtArgs>>): Prisma__PolicyTriggerClient<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PolicyTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTriggerCountArgs} args - Arguments to filter PolicyTriggers to count.
     * @example
     * // Count the number of PolicyTriggers
     * const count = await prisma.policyTrigger.count({
     *   where: {
     *     // ... the filter for the PolicyTriggers we want to count
     *   }
     * })
    **/
    count<T extends PolicyTriggerCountArgs>(
      args?: Subset<T, PolicyTriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyTriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicyTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyTriggerAggregateArgs>(args: Subset<T, PolicyTriggerAggregateArgs>): Prisma.PrismaPromise<GetPolicyTriggerAggregateType<T>>

    /**
     * Group by PolicyTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTriggerGroupByArgs} args - Group by arguments.
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
      T extends PolicyTriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyTriggerGroupByArgs['orderBy'] }
        : { orderBy?: PolicyTriggerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PolicyTriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolicyTrigger model
   */
  readonly fields: PolicyTriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicyTrigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyTriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    policy<T extends PolicyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PolicyDefaultArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    oracleData<T extends OracleDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OracleDataDefaultArgs<ExtArgs>>): Prisma__OracleDataClient<$Result.GetResult<Prisma.$OracleDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    payout<T extends PolicyTrigger$payoutArgs<ExtArgs> = {}>(args?: Subset<T, PolicyTrigger$payoutArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the PolicyTrigger model
   */ 
  interface PolicyTriggerFieldRefs {
    readonly id: FieldRef<"PolicyTrigger", 'Int'>
    readonly policyId: FieldRef<"PolicyTrigger", 'Int'>
    readonly oracleDataId: FieldRef<"PolicyTrigger", 'Int'>
    readonly triggered: FieldRef<"PolicyTrigger", 'Boolean'>
    readonly triggerCheckedAt: FieldRef<"PolicyTrigger", 'DateTime'>
    readonly payoutId: FieldRef<"PolicyTrigger", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PolicyTrigger findUnique
   */
  export type PolicyTriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * Filter, which PolicyTrigger to fetch.
     */
    where: PolicyTriggerWhereUniqueInput
  }

  /**
   * PolicyTrigger findUniqueOrThrow
   */
  export type PolicyTriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * Filter, which PolicyTrigger to fetch.
     */
    where: PolicyTriggerWhereUniqueInput
  }

  /**
   * PolicyTrigger findFirst
   */
  export type PolicyTriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * Filter, which PolicyTrigger to fetch.
     */
    where?: PolicyTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTriggers to fetch.
     */
    orderBy?: PolicyTriggerOrderByWithRelationInput | PolicyTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTriggers.
     */
    cursor?: PolicyTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTriggers.
     */
    distinct?: PolicyTriggerScalarFieldEnum | PolicyTriggerScalarFieldEnum[]
  }

  /**
   * PolicyTrigger findFirstOrThrow
   */
  export type PolicyTriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * Filter, which PolicyTrigger to fetch.
     */
    where?: PolicyTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTriggers to fetch.
     */
    orderBy?: PolicyTriggerOrderByWithRelationInput | PolicyTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTriggers.
     */
    cursor?: PolicyTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTriggers.
     */
    distinct?: PolicyTriggerScalarFieldEnum | PolicyTriggerScalarFieldEnum[]
  }

  /**
   * PolicyTrigger findMany
   */
  export type PolicyTriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * Filter, which PolicyTriggers to fetch.
     */
    where?: PolicyTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTriggers to fetch.
     */
    orderBy?: PolicyTriggerOrderByWithRelationInput | PolicyTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicyTriggers.
     */
    cursor?: PolicyTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTriggers.
     */
    skip?: number
    distinct?: PolicyTriggerScalarFieldEnum | PolicyTriggerScalarFieldEnum[]
  }

  /**
   * PolicyTrigger create
   */
  export type PolicyTriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a PolicyTrigger.
     */
    data: XOR<PolicyTriggerCreateInput, PolicyTriggerUncheckedCreateInput>
  }

  /**
   * PolicyTrigger createMany
   */
  export type PolicyTriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolicyTriggers.
     */
    data: PolicyTriggerCreateManyInput | PolicyTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicyTrigger createManyAndReturn
   */
  export type PolicyTriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PolicyTriggers.
     */
    data: PolicyTriggerCreateManyInput | PolicyTriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PolicyTrigger update
   */
  export type PolicyTriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a PolicyTrigger.
     */
    data: XOR<PolicyTriggerUpdateInput, PolicyTriggerUncheckedUpdateInput>
    /**
     * Choose, which PolicyTrigger to update.
     */
    where: PolicyTriggerWhereUniqueInput
  }

  /**
   * PolicyTrigger updateMany
   */
  export type PolicyTriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolicyTriggers.
     */
    data: XOR<PolicyTriggerUpdateManyMutationInput, PolicyTriggerUncheckedUpdateManyInput>
    /**
     * Filter which PolicyTriggers to update
     */
    where?: PolicyTriggerWhereInput
  }

  /**
   * PolicyTrigger upsert
   */
  export type PolicyTriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the PolicyTrigger to update in case it exists.
     */
    where: PolicyTriggerWhereUniqueInput
    /**
     * In case the PolicyTrigger found by the `where` argument doesn't exist, create a new PolicyTrigger with this data.
     */
    create: XOR<PolicyTriggerCreateInput, PolicyTriggerUncheckedCreateInput>
    /**
     * In case the PolicyTrigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyTriggerUpdateInput, PolicyTriggerUncheckedUpdateInput>
  }

  /**
   * PolicyTrigger delete
   */
  export type PolicyTriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    /**
     * Filter which PolicyTrigger to delete.
     */
    where: PolicyTriggerWhereUniqueInput
  }

  /**
   * PolicyTrigger deleteMany
   */
  export type PolicyTriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyTriggers to delete
     */
    where?: PolicyTriggerWhereInput
  }

  /**
   * PolicyTrigger.payout
   */
  export type PolicyTrigger$payoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    where?: PayoutWhereInput
  }

  /**
   * PolicyTrigger without action
   */
  export type PolicyTriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    policyId: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    policyId: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    policyId: number | null
    amount: Decimal | null
    paymentTxHash: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    policyId: number | null
    amount: Decimal | null
    paymentTxHash: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    policyId: number
    amount: number
    paymentTxHash: number
    paidAt: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    policyId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    policyId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    policyId?: true
    amount?: true
    paymentTxHash?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    policyId?: true
    amount?: true
    paymentTxHash?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    policyId?: true
    amount?: true
    paymentTxHash?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    policyId: number
    amount: Decimal
    paymentTxHash: string | null
    paidAt: Date
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    amount?: boolean
    paymentTxHash?: boolean
    paidAt?: boolean
    createdAt?: boolean
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    amount?: boolean
    paymentTxHash?: boolean
    paidAt?: boolean
    createdAt?: boolean
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    policyId?: boolean
    amount?: boolean
    paymentTxHash?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      policy: Prisma.$PolicyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      policyId: number
      amount: Prisma.Decimal
      paymentTxHash: string | null
      paidAt: Date
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    policy<T extends PolicyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PolicyDefaultArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly policyId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paymentTxHash: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Payout
   */

  export type AggregatePayout = {
    _count: PayoutCountAggregateOutputType | null
    _avg: PayoutAvgAggregateOutputType | null
    _sum: PayoutSumAggregateOutputType | null
    _min: PayoutMinAggregateOutputType | null
    _max: PayoutMaxAggregateOutputType | null
  }

  export type PayoutAvgAggregateOutputType = {
    id: number | null
    policyId: number | null
    riskPoolId: number | null
    payoutAmount: Decimal | null
  }

  export type PayoutSumAggregateOutputType = {
    id: number | null
    policyId: number | null
    riskPoolId: number | null
    payoutAmount: Decimal | null
  }

  export type PayoutMinAggregateOutputType = {
    id: number | null
    policyId: number | null
    riskPoolId: number | null
    payoutAmount: Decimal | null
    payoutTxHash: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PayoutMaxAggregateOutputType = {
    id: number | null
    policyId: number | null
    riskPoolId: number | null
    payoutAmount: Decimal | null
    payoutTxHash: string | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PayoutCountAggregateOutputType = {
    id: number
    policyId: number
    riskPoolId: number
    payoutAmount: number
    payoutTxHash: number
    paidAt: number
    createdAt: number
    _all: number
  }


  export type PayoutAvgAggregateInputType = {
    id?: true
    policyId?: true
    riskPoolId?: true
    payoutAmount?: true
  }

  export type PayoutSumAggregateInputType = {
    id?: true
    policyId?: true
    riskPoolId?: true
    payoutAmount?: true
  }

  export type PayoutMinAggregateInputType = {
    id?: true
    policyId?: true
    riskPoolId?: true
    payoutAmount?: true
    payoutTxHash?: true
    paidAt?: true
    createdAt?: true
  }

  export type PayoutMaxAggregateInputType = {
    id?: true
    policyId?: true
    riskPoolId?: true
    payoutAmount?: true
    payoutTxHash?: true
    paidAt?: true
    createdAt?: true
  }

  export type PayoutCountAggregateInputType = {
    id?: true
    policyId?: true
    riskPoolId?: true
    payoutAmount?: true
    payoutTxHash?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type PayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payout to aggregate.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payouts
    **/
    _count?: true | PayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutMaxAggregateInputType
  }

  export type GetPayoutAggregateType<T extends PayoutAggregateArgs> = {
        [P in keyof T & keyof AggregatePayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayout[P]>
      : GetScalarType<T[P], AggregatePayout[P]>
  }




  export type PayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithAggregationInput | PayoutOrderByWithAggregationInput[]
    by: PayoutScalarFieldEnum[] | PayoutScalarFieldEnum
    having?: PayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutCountAggregateInputType | true
    _avg?: PayoutAvgAggregateInputType
    _sum?: PayoutSumAggregateInputType
    _min?: PayoutMinAggregateInputType
    _max?: PayoutMaxAggregateInputType
  }

  export type PayoutGroupByOutputType = {
    id: number
    policyId: number | null
    riskPoolId: number | null
    payoutAmount: Decimal
    payoutTxHash: string | null
    paidAt: Date | null
    createdAt: Date
    _count: PayoutCountAggregateOutputType | null
    _avg: PayoutAvgAggregateOutputType | null
    _sum: PayoutSumAggregateOutputType | null
    _min: PayoutMinAggregateOutputType | null
    _max: PayoutMaxAggregateOutputType | null
  }

  type GetPayoutGroupByPayload<T extends PayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutGroupByOutputType[P]>
        }
      >
    >


  export type PayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    riskPoolId?: boolean
    payoutAmount?: boolean
    payoutTxHash?: boolean
    paidAt?: boolean
    createdAt?: boolean
    policy?: boolean | Payout$policyArgs<ExtArgs>
    riskPool?: boolean | Payout$riskPoolArgs<ExtArgs>
    policyTriggers?: boolean | Payout$policyTriggersArgs<ExtArgs>
    _count?: boolean | PayoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payout"]>

  export type PayoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    riskPoolId?: boolean
    payoutAmount?: boolean
    payoutTxHash?: boolean
    paidAt?: boolean
    createdAt?: boolean
    policy?: boolean | Payout$policyArgs<ExtArgs>
    riskPool?: boolean | Payout$riskPoolArgs<ExtArgs>
  }, ExtArgs["result"]["payout"]>

  export type PayoutSelectScalar = {
    id?: boolean
    policyId?: boolean
    riskPoolId?: boolean
    payoutAmount?: boolean
    payoutTxHash?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }

  export type PayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | Payout$policyArgs<ExtArgs>
    riskPool?: boolean | Payout$riskPoolArgs<ExtArgs>
    policyTriggers?: boolean | Payout$policyTriggersArgs<ExtArgs>
    _count?: boolean | PayoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | Payout$policyArgs<ExtArgs>
    riskPool?: boolean | Payout$riskPoolArgs<ExtArgs>
  }

  export type $PayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payout"
    objects: {
      policy: Prisma.$PolicyPayload<ExtArgs> | null
      riskPool: Prisma.$RiskPoolPayload<ExtArgs> | null
      policyTriggers: Prisma.$PolicyTriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      policyId: number | null
      riskPoolId: number | null
      payoutAmount: Prisma.Decimal
      payoutTxHash: string | null
      paidAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["payout"]>
    composites: {}
  }

  type PayoutGetPayload<S extends boolean | null | undefined | PayoutDefaultArgs> = $Result.GetResult<Prisma.$PayoutPayload, S>

  type PayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PayoutFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PayoutCountAggregateInputType | true
    }

  export interface PayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payout'], meta: { name: 'Payout' } }
    /**
     * Find zero or one Payout that matches the filter.
     * @param {PayoutFindUniqueArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutFindUniqueArgs>(args: SelectSubset<T, PayoutFindUniqueArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payout that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PayoutFindUniqueOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutFindUniqueOrThrowArgs>(args: SelectSubset<T, PayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutFindFirstArgs>(args?: SelectSubset<T, PayoutFindFirstArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutFindFirstOrThrowArgs>(args?: SelectSubset<T, PayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payouts
     * const payouts = await prisma.payout.findMany()
     * 
     * // Get first 10 Payouts
     * const payouts = await prisma.payout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutWithIdOnly = await prisma.payout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayoutFindManyArgs>(args?: SelectSubset<T, PayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payout.
     * @param {PayoutCreateArgs} args - Arguments to create a Payout.
     * @example
     * // Create one Payout
     * const Payout = await prisma.payout.create({
     *   data: {
     *     // ... data to create a Payout
     *   }
     * })
     * 
     */
    create<T extends PayoutCreateArgs>(args: SelectSubset<T, PayoutCreateArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payouts.
     * @param {PayoutCreateManyArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payout = await prisma.payout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayoutCreateManyArgs>(args?: SelectSubset<T, PayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payouts and returns the data saved in the database.
     * @param {PayoutCreateManyAndReturnArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payout = await prisma.payout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payouts and only return the `id`
     * const payoutWithIdOnly = await prisma.payout.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayoutCreateManyAndReturnArgs>(args?: SelectSubset<T, PayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payout.
     * @param {PayoutDeleteArgs} args - Arguments to delete one Payout.
     * @example
     * // Delete one Payout
     * const Payout = await prisma.payout.delete({
     *   where: {
     *     // ... filter to delete one Payout
     *   }
     * })
     * 
     */
    delete<T extends PayoutDeleteArgs>(args: SelectSubset<T, PayoutDeleteArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payout.
     * @param {PayoutUpdateArgs} args - Arguments to update one Payout.
     * @example
     * // Update one Payout
     * const payout = await prisma.payout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayoutUpdateArgs>(args: SelectSubset<T, PayoutUpdateArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payouts.
     * @param {PayoutDeleteManyArgs} args - Arguments to filter Payouts to delete.
     * @example
     * // Delete a few Payouts
     * const { count } = await prisma.payout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayoutDeleteManyArgs>(args?: SelectSubset<T, PayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payouts
     * const payout = await prisma.payout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayoutUpdateManyArgs>(args: SelectSubset<T, PayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payout.
     * @param {PayoutUpsertArgs} args - Arguments to update or create a Payout.
     * @example
     * // Update or create a Payout
     * const payout = await prisma.payout.upsert({
     *   create: {
     *     // ... data to create a Payout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payout we want to update
     *   }
     * })
     */
    upsert<T extends PayoutUpsertArgs>(args: SelectSubset<T, PayoutUpsertArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutCountArgs} args - Arguments to filter Payouts to count.
     * @example
     * // Count the number of Payouts
     * const count = await prisma.payout.count({
     *   where: {
     *     // ... the filter for the Payouts we want to count
     *   }
     * })
    **/
    count<T extends PayoutCountArgs>(
      args?: Subset<T, PayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayoutAggregateArgs>(args: Subset<T, PayoutAggregateArgs>): Prisma.PrismaPromise<GetPayoutAggregateType<T>>

    /**
     * Group by Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutGroupByArgs} args - Group by arguments.
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
      T extends PayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutGroupByArgs['orderBy'] }
        : { orderBy?: PayoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payout model
   */
  readonly fields: PayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    policy<T extends Payout$policyArgs<ExtArgs> = {}>(args?: Subset<T, Payout$policyArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    riskPool<T extends Payout$riskPoolArgs<ExtArgs> = {}>(args?: Subset<T, Payout$riskPoolArgs<ExtArgs>>): Prisma__RiskPoolClient<$Result.GetResult<Prisma.$RiskPoolPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    policyTriggers<T extends Payout$policyTriggersArgs<ExtArgs> = {}>(args?: Subset<T, Payout$policyTriggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTriggerPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Payout model
   */ 
  interface PayoutFieldRefs {
    readonly id: FieldRef<"Payout", 'Int'>
    readonly policyId: FieldRef<"Payout", 'Int'>
    readonly riskPoolId: FieldRef<"Payout", 'Int'>
    readonly payoutAmount: FieldRef<"Payout", 'Decimal'>
    readonly payoutTxHash: FieldRef<"Payout", 'String'>
    readonly paidAt: FieldRef<"Payout", 'DateTime'>
    readonly createdAt: FieldRef<"Payout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payout findUnique
   */
  export type PayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout findUniqueOrThrow
   */
  export type PayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout findFirst
   */
  export type PayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payouts.
     */
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout findFirstOrThrow
   */
  export type PayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payouts.
     */
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout findMany
   */
  export type PayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payouts to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout create
   */
  export type PayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Payout.
     */
    data: XOR<PayoutCreateInput, PayoutUncheckedCreateInput>
  }

  /**
   * Payout createMany
   */
  export type PayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payouts.
     */
    data: PayoutCreateManyInput | PayoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payout createManyAndReturn
   */
  export type PayoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payouts.
     */
    data: PayoutCreateManyInput | PayoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payout update
   */
  export type PayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Payout.
     */
    data: XOR<PayoutUpdateInput, PayoutUncheckedUpdateInput>
    /**
     * Choose, which Payout to update.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout updateMany
   */
  export type PayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payouts.
     */
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyInput>
    /**
     * Filter which Payouts to update
     */
    where?: PayoutWhereInput
  }

  /**
   * Payout upsert
   */
  export type PayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Payout to update in case it exists.
     */
    where: PayoutWhereUniqueInput
    /**
     * In case the Payout found by the `where` argument doesn't exist, create a new Payout with this data.
     */
    create: XOR<PayoutCreateInput, PayoutUncheckedCreateInput>
    /**
     * In case the Payout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutUpdateInput, PayoutUncheckedUpdateInput>
  }

  /**
   * Payout delete
   */
  export type PayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter which Payout to delete.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout deleteMany
   */
  export type PayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payouts to delete
     */
    where?: PayoutWhereInput
  }

  /**
   * Payout.policy
   */
  export type Payout$policyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
  }

  /**
   * Payout.riskPool
   */
  export type Payout$riskPoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPool
     */
    select?: RiskPoolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPoolInclude<ExtArgs> | null
    where?: RiskPoolWhereInput
  }

  /**
   * Payout.policyTriggers
   */
  export type Payout$policyTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTrigger
     */
    select?: PolicyTriggerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTriggerInclude<ExtArgs> | null
    where?: PolicyTriggerWhereInput
    orderBy?: PolicyTriggerOrderByWithRelationInput | PolicyTriggerOrderByWithRelationInput[]
    cursor?: PolicyTriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyTriggerScalarFieldEnum | PolicyTriggerScalarFieldEnum[]
  }

  /**
   * Payout without action
   */
  export type PayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
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
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    walletAddress: 'walletAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const EventTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type EventTypeScalarFieldEnum = (typeof EventTypeScalarFieldEnum)[keyof typeof EventTypeScalarFieldEnum]


  export const RiskPoolScalarFieldEnum: {
    id: 'id',
    communityId: 'communityId',
    eventTypeId: 'eventTypeId',
    totalCapital: 'totalCapital',
    createdAt: 'createdAt'
  };

  export type RiskPoolScalarFieldEnum = (typeof RiskPoolScalarFieldEnum)[keyof typeof RiskPoolScalarFieldEnum]


  export const CapitalProviderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    riskPoolId: 'riskPoolId',
    stakeAmount: 'stakeAmount',
    stakeDate: 'stakeDate',
    createdAt: 'createdAt'
  };

  export type CapitalProviderScalarFieldEnum = (typeof CapitalProviderScalarFieldEnum)[keyof typeof CapitalProviderScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    riskPoolId: 'riskPoolId',
    coverageAmount: 'coverageAmount',
    premiumAmount: 'premiumAmount',
    coverageStart: 'coverageStart',
    coverageEnd: 'coverageEnd',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const OracleSourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sourceType: 'sourceType',
    endpoint: 'endpoint',
    createdAt: 'createdAt'
  };

  export type OracleSourceScalarFieldEnum = (typeof OracleSourceScalarFieldEnum)[keyof typeof OracleSourceScalarFieldEnum]


  export const OracleDataScalarFieldEnum: {
    id: 'id',
    oracleSourceId: 'oracleSourceId',
    timestamp: 'timestamp',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type OracleDataScalarFieldEnum = (typeof OracleDataScalarFieldEnum)[keyof typeof OracleDataScalarFieldEnum]


  export const PolicyTriggerScalarFieldEnum: {
    id: 'id',
    policyId: 'policyId',
    oracleDataId: 'oracleDataId',
    triggered: 'triggered',
    triggerCheckedAt: 'triggerCheckedAt',
    payoutId: 'payoutId'
  };

  export type PolicyTriggerScalarFieldEnum = (typeof PolicyTriggerScalarFieldEnum)[keyof typeof PolicyTriggerScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    policyId: 'policyId',
    amount: 'amount',
    paymentTxHash: 'paymentTxHash',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PayoutScalarFieldEnum: {
    id: 'id',
    policyId: 'policyId',
    riskPoolId: 'riskPoolId',
    payoutAmount: 'payoutAmount',
    payoutTxHash: 'payoutTxHash',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
  };

  export type PayoutScalarFieldEnum = (typeof PayoutScalarFieldEnum)[keyof typeof PayoutScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    walletAddress?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    policies?: PolicyListRelationFilter
    capitalProviders?: CapitalProviderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    walletAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    policies?: PolicyOrderByRelationAggregateInput
    capitalProviders?: CapitalProviderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    walletAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    policies?: PolicyListRelationFilter
    capitalProviders?: CapitalProviderListRelationFilter
  }, "id" | "email" | "walletAddress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    walletAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    walletAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: IntFilter<"Community"> | number
    name?: StringFilter<"Community"> | string
    description?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeFilter<"Community"> | Date | string
    riskPools?: RiskPoolListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    riskPools?: RiskPoolOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    description?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeFilter<"Community"> | Date | string
    riskPools?: RiskPoolListRelationFilter
  }, "id" | "name">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Community"> | number
    name?: StringWithAggregatesFilter<"Community"> | string
    description?: StringNullableWithAggregatesFilter<"Community"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type EventTypeWhereInput = {
    AND?: EventTypeWhereInput | EventTypeWhereInput[]
    OR?: EventTypeWhereInput[]
    NOT?: EventTypeWhereInput | EventTypeWhereInput[]
    id?: IntFilter<"EventType"> | number
    name?: StringFilter<"EventType"> | string
    description?: StringNullableFilter<"EventType"> | string | null
    riskPools?: RiskPoolListRelationFilter
  }

  export type EventTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    riskPools?: RiskPoolOrderByRelationAggregateInput
  }

  export type EventTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: EventTypeWhereInput | EventTypeWhereInput[]
    OR?: EventTypeWhereInput[]
    NOT?: EventTypeWhereInput | EventTypeWhereInput[]
    description?: StringNullableFilter<"EventType"> | string | null
    riskPools?: RiskPoolListRelationFilter
  }, "id" | "name">

  export type EventTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: EventTypeCountOrderByAggregateInput
    _avg?: EventTypeAvgOrderByAggregateInput
    _max?: EventTypeMaxOrderByAggregateInput
    _min?: EventTypeMinOrderByAggregateInput
    _sum?: EventTypeSumOrderByAggregateInput
  }

  export type EventTypeScalarWhereWithAggregatesInput = {
    AND?: EventTypeScalarWhereWithAggregatesInput | EventTypeScalarWhereWithAggregatesInput[]
    OR?: EventTypeScalarWhereWithAggregatesInput[]
    NOT?: EventTypeScalarWhereWithAggregatesInput | EventTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventType"> | number
    name?: StringWithAggregatesFilter<"EventType"> | string
    description?: StringNullableWithAggregatesFilter<"EventType"> | string | null
  }

  export type RiskPoolWhereInput = {
    AND?: RiskPoolWhereInput | RiskPoolWhereInput[]
    OR?: RiskPoolWhereInput[]
    NOT?: RiskPoolWhereInput | RiskPoolWhereInput[]
    id?: IntFilter<"RiskPool"> | number
    communityId?: IntFilter<"RiskPool"> | number
    eventTypeId?: IntFilter<"RiskPool"> | number
    totalCapital?: DecimalFilter<"RiskPool"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RiskPool"> | Date | string
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
    policies?: PolicyListRelationFilter
    capitalProviders?: CapitalProviderListRelationFilter
    payouts?: PayoutListRelationFilter
  }

  export type RiskPoolOrderByWithRelationInput = {
    id?: SortOrder
    communityId?: SortOrder
    eventTypeId?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
    eventType?: EventTypeOrderByWithRelationInput
    policies?: PolicyOrderByRelationAggregateInput
    capitalProviders?: CapitalProviderOrderByRelationAggregateInput
    payouts?: PayoutOrderByRelationAggregateInput
  }

  export type RiskPoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RiskPoolWhereInput | RiskPoolWhereInput[]
    OR?: RiskPoolWhereInput[]
    NOT?: RiskPoolWhereInput | RiskPoolWhereInput[]
    communityId?: IntFilter<"RiskPool"> | number
    eventTypeId?: IntFilter<"RiskPool"> | number
    totalCapital?: DecimalFilter<"RiskPool"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RiskPool"> | Date | string
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    eventType?: XOR<EventTypeRelationFilter, EventTypeWhereInput>
    policies?: PolicyListRelationFilter
    capitalProviders?: CapitalProviderListRelationFilter
    payouts?: PayoutListRelationFilter
  }, "id">

  export type RiskPoolOrderByWithAggregationInput = {
    id?: SortOrder
    communityId?: SortOrder
    eventTypeId?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
    _count?: RiskPoolCountOrderByAggregateInput
    _avg?: RiskPoolAvgOrderByAggregateInput
    _max?: RiskPoolMaxOrderByAggregateInput
    _min?: RiskPoolMinOrderByAggregateInput
    _sum?: RiskPoolSumOrderByAggregateInput
  }

  export type RiskPoolScalarWhereWithAggregatesInput = {
    AND?: RiskPoolScalarWhereWithAggregatesInput | RiskPoolScalarWhereWithAggregatesInput[]
    OR?: RiskPoolScalarWhereWithAggregatesInput[]
    NOT?: RiskPoolScalarWhereWithAggregatesInput | RiskPoolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RiskPool"> | number
    communityId?: IntWithAggregatesFilter<"RiskPool"> | number
    eventTypeId?: IntWithAggregatesFilter<"RiskPool"> | number
    totalCapital?: DecimalWithAggregatesFilter<"RiskPool"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"RiskPool"> | Date | string
  }

  export type CapitalProviderWhereInput = {
    AND?: CapitalProviderWhereInput | CapitalProviderWhereInput[]
    OR?: CapitalProviderWhereInput[]
    NOT?: CapitalProviderWhereInput | CapitalProviderWhereInput[]
    id?: IntFilter<"CapitalProvider"> | number
    userId?: IntFilter<"CapitalProvider"> | number
    riskPoolId?: IntFilter<"CapitalProvider"> | number
    stakeAmount?: DecimalFilter<"CapitalProvider"> | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFilter<"CapitalProvider"> | Date | string
    createdAt?: DateTimeFilter<"CapitalProvider"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    riskPool?: XOR<RiskPoolRelationFilter, RiskPoolWhereInput>
  }

  export type CapitalProviderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    stakeAmount?: SortOrder
    stakeDate?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    riskPool?: RiskPoolOrderByWithRelationInput
  }

  export type CapitalProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CapitalProviderWhereInput | CapitalProviderWhereInput[]
    OR?: CapitalProviderWhereInput[]
    NOT?: CapitalProviderWhereInput | CapitalProviderWhereInput[]
    userId?: IntFilter<"CapitalProvider"> | number
    riskPoolId?: IntFilter<"CapitalProvider"> | number
    stakeAmount?: DecimalFilter<"CapitalProvider"> | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFilter<"CapitalProvider"> | Date | string
    createdAt?: DateTimeFilter<"CapitalProvider"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    riskPool?: XOR<RiskPoolRelationFilter, RiskPoolWhereInput>
  }, "id">

  export type CapitalProviderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    stakeAmount?: SortOrder
    stakeDate?: SortOrder
    createdAt?: SortOrder
    _count?: CapitalProviderCountOrderByAggregateInput
    _avg?: CapitalProviderAvgOrderByAggregateInput
    _max?: CapitalProviderMaxOrderByAggregateInput
    _min?: CapitalProviderMinOrderByAggregateInput
    _sum?: CapitalProviderSumOrderByAggregateInput
  }

  export type CapitalProviderScalarWhereWithAggregatesInput = {
    AND?: CapitalProviderScalarWhereWithAggregatesInput | CapitalProviderScalarWhereWithAggregatesInput[]
    OR?: CapitalProviderScalarWhereWithAggregatesInput[]
    NOT?: CapitalProviderScalarWhereWithAggregatesInput | CapitalProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CapitalProvider"> | number
    userId?: IntWithAggregatesFilter<"CapitalProvider"> | number
    riskPoolId?: IntWithAggregatesFilter<"CapitalProvider"> | number
    stakeAmount?: DecimalWithAggregatesFilter<"CapitalProvider"> | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeWithAggregatesFilter<"CapitalProvider"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CapitalProvider"> | Date | string
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: IntFilter<"Policy"> | number
    userId?: IntFilter<"Policy"> | number
    riskPoolId?: IntFilter<"Policy"> | number
    coverageAmount?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFilter<"Policy"> | Date | string
    coverageEnd?: DateTimeFilter<"Policy"> | Date | string
    status?: StringFilter<"Policy"> | string
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    riskPool?: XOR<RiskPoolRelationFilter, RiskPoolWhereInput>
    policyTriggers?: PolicyTriggerListRelationFilter
    payments?: PaymentListRelationFilter
    payouts?: PayoutListRelationFilter
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    coverageAmount?: SortOrder
    premiumAmount?: SortOrder
    coverageStart?: SortOrder
    coverageEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    riskPool?: RiskPoolOrderByWithRelationInput
    policyTriggers?: PolicyTriggerOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    payouts?: PayoutOrderByRelationAggregateInput
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    userId?: IntFilter<"Policy"> | number
    riskPoolId?: IntFilter<"Policy"> | number
    coverageAmount?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFilter<"Policy"> | Date | string
    coverageEnd?: DateTimeFilter<"Policy"> | Date | string
    status?: StringFilter<"Policy"> | string
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    riskPool?: XOR<RiskPoolRelationFilter, RiskPoolWhereInput>
    policyTriggers?: PolicyTriggerListRelationFilter
    payments?: PaymentListRelationFilter
    payouts?: PayoutListRelationFilter
  }, "id">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    coverageAmount?: SortOrder
    premiumAmount?: SortOrder
    coverageStart?: SortOrder
    coverageEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Policy"> | number
    userId?: IntWithAggregatesFilter<"Policy"> | number
    riskPoolId?: IntWithAggregatesFilter<"Policy"> | number
    coverageAmount?: DecimalWithAggregatesFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalWithAggregatesFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    coverageEnd?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    status?: StringWithAggregatesFilter<"Policy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
  }

  export type OracleSourceWhereInput = {
    AND?: OracleSourceWhereInput | OracleSourceWhereInput[]
    OR?: OracleSourceWhereInput[]
    NOT?: OracleSourceWhereInput | OracleSourceWhereInput[]
    id?: IntFilter<"OracleSource"> | number
    name?: StringFilter<"OracleSource"> | string
    sourceType?: StringNullableFilter<"OracleSource"> | string | null
    endpoint?: StringNullableFilter<"OracleSource"> | string | null
    createdAt?: DateTimeFilter<"OracleSource"> | Date | string
    oracleData?: OracleDataListRelationFilter
  }

  export type OracleSourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceType?: SortOrderInput | SortOrder
    endpoint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    oracleData?: OracleDataOrderByRelationAggregateInput
  }

  export type OracleSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: OracleSourceWhereInput | OracleSourceWhereInput[]
    OR?: OracleSourceWhereInput[]
    NOT?: OracleSourceWhereInput | OracleSourceWhereInput[]
    sourceType?: StringNullableFilter<"OracleSource"> | string | null
    endpoint?: StringNullableFilter<"OracleSource"> | string | null
    createdAt?: DateTimeFilter<"OracleSource"> | Date | string
    oracleData?: OracleDataListRelationFilter
  }, "id" | "name">

  export type OracleSourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceType?: SortOrderInput | SortOrder
    endpoint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OracleSourceCountOrderByAggregateInput
    _avg?: OracleSourceAvgOrderByAggregateInput
    _max?: OracleSourceMaxOrderByAggregateInput
    _min?: OracleSourceMinOrderByAggregateInput
    _sum?: OracleSourceSumOrderByAggregateInput
  }

  export type OracleSourceScalarWhereWithAggregatesInput = {
    AND?: OracleSourceScalarWhereWithAggregatesInput | OracleSourceScalarWhereWithAggregatesInput[]
    OR?: OracleSourceScalarWhereWithAggregatesInput[]
    NOT?: OracleSourceScalarWhereWithAggregatesInput | OracleSourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OracleSource"> | number
    name?: StringWithAggregatesFilter<"OracleSource"> | string
    sourceType?: StringNullableWithAggregatesFilter<"OracleSource"> | string | null
    endpoint?: StringNullableWithAggregatesFilter<"OracleSource"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OracleSource"> | Date | string
  }

  export type OracleDataWhereInput = {
    AND?: OracleDataWhereInput | OracleDataWhereInput[]
    OR?: OracleDataWhereInput[]
    NOT?: OracleDataWhereInput | OracleDataWhereInput[]
    id?: IntFilter<"OracleData"> | number
    oracleSourceId?: IntFilter<"OracleData"> | number
    timestamp?: DateTimeFilter<"OracleData"> | Date | string
    data?: JsonFilter<"OracleData">
    createdAt?: DateTimeFilter<"OracleData"> | Date | string
    oracleSource?: XOR<OracleSourceRelationFilter, OracleSourceWhereInput>
    policyTriggers?: PolicyTriggerListRelationFilter
  }

  export type OracleDataOrderByWithRelationInput = {
    id?: SortOrder
    oracleSourceId?: SortOrder
    timestamp?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    oracleSource?: OracleSourceOrderByWithRelationInput
    policyTriggers?: PolicyTriggerOrderByRelationAggregateInput
  }

  export type OracleDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OracleDataWhereInput | OracleDataWhereInput[]
    OR?: OracleDataWhereInput[]
    NOT?: OracleDataWhereInput | OracleDataWhereInput[]
    oracleSourceId?: IntFilter<"OracleData"> | number
    timestamp?: DateTimeFilter<"OracleData"> | Date | string
    data?: JsonFilter<"OracleData">
    createdAt?: DateTimeFilter<"OracleData"> | Date | string
    oracleSource?: XOR<OracleSourceRelationFilter, OracleSourceWhereInput>
    policyTriggers?: PolicyTriggerListRelationFilter
  }, "id">

  export type OracleDataOrderByWithAggregationInput = {
    id?: SortOrder
    oracleSourceId?: SortOrder
    timestamp?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: OracleDataCountOrderByAggregateInput
    _avg?: OracleDataAvgOrderByAggregateInput
    _max?: OracleDataMaxOrderByAggregateInput
    _min?: OracleDataMinOrderByAggregateInput
    _sum?: OracleDataSumOrderByAggregateInput
  }

  export type OracleDataScalarWhereWithAggregatesInput = {
    AND?: OracleDataScalarWhereWithAggregatesInput | OracleDataScalarWhereWithAggregatesInput[]
    OR?: OracleDataScalarWhereWithAggregatesInput[]
    NOT?: OracleDataScalarWhereWithAggregatesInput | OracleDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OracleData"> | number
    oracleSourceId?: IntWithAggregatesFilter<"OracleData"> | number
    timestamp?: DateTimeWithAggregatesFilter<"OracleData"> | Date | string
    data?: JsonWithAggregatesFilter<"OracleData">
    createdAt?: DateTimeWithAggregatesFilter<"OracleData"> | Date | string
  }

  export type PolicyTriggerWhereInput = {
    AND?: PolicyTriggerWhereInput | PolicyTriggerWhereInput[]
    OR?: PolicyTriggerWhereInput[]
    NOT?: PolicyTriggerWhereInput | PolicyTriggerWhereInput[]
    id?: IntFilter<"PolicyTrigger"> | number
    policyId?: IntFilter<"PolicyTrigger"> | number
    oracleDataId?: IntFilter<"PolicyTrigger"> | number
    triggered?: BoolFilter<"PolicyTrigger"> | boolean
    triggerCheckedAt?: DateTimeFilter<"PolicyTrigger"> | Date | string
    payoutId?: IntNullableFilter<"PolicyTrigger"> | number | null
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
    oracleData?: XOR<OracleDataRelationFilter, OracleDataWhereInput>
    payout?: XOR<PayoutNullableRelationFilter, PayoutWhereInput> | null
  }

  export type PolicyTriggerOrderByWithRelationInput = {
    id?: SortOrder
    policyId?: SortOrder
    oracleDataId?: SortOrder
    triggered?: SortOrder
    triggerCheckedAt?: SortOrder
    payoutId?: SortOrderInput | SortOrder
    policy?: PolicyOrderByWithRelationInput
    oracleData?: OracleDataOrderByWithRelationInput
    payout?: PayoutOrderByWithRelationInput
  }

  export type PolicyTriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolicyTriggerWhereInput | PolicyTriggerWhereInput[]
    OR?: PolicyTriggerWhereInput[]
    NOT?: PolicyTriggerWhereInput | PolicyTriggerWhereInput[]
    policyId?: IntFilter<"PolicyTrigger"> | number
    oracleDataId?: IntFilter<"PolicyTrigger"> | number
    triggered?: BoolFilter<"PolicyTrigger"> | boolean
    triggerCheckedAt?: DateTimeFilter<"PolicyTrigger"> | Date | string
    payoutId?: IntNullableFilter<"PolicyTrigger"> | number | null
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
    oracleData?: XOR<OracleDataRelationFilter, OracleDataWhereInput>
    payout?: XOR<PayoutNullableRelationFilter, PayoutWhereInput> | null
  }, "id">

  export type PolicyTriggerOrderByWithAggregationInput = {
    id?: SortOrder
    policyId?: SortOrder
    oracleDataId?: SortOrder
    triggered?: SortOrder
    triggerCheckedAt?: SortOrder
    payoutId?: SortOrderInput | SortOrder
    _count?: PolicyTriggerCountOrderByAggregateInput
    _avg?: PolicyTriggerAvgOrderByAggregateInput
    _max?: PolicyTriggerMaxOrderByAggregateInput
    _min?: PolicyTriggerMinOrderByAggregateInput
    _sum?: PolicyTriggerSumOrderByAggregateInput
  }

  export type PolicyTriggerScalarWhereWithAggregatesInput = {
    AND?: PolicyTriggerScalarWhereWithAggregatesInput | PolicyTriggerScalarWhereWithAggregatesInput[]
    OR?: PolicyTriggerScalarWhereWithAggregatesInput[]
    NOT?: PolicyTriggerScalarWhereWithAggregatesInput | PolicyTriggerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PolicyTrigger"> | number
    policyId?: IntWithAggregatesFilter<"PolicyTrigger"> | number
    oracleDataId?: IntWithAggregatesFilter<"PolicyTrigger"> | number
    triggered?: BoolWithAggregatesFilter<"PolicyTrigger"> | boolean
    triggerCheckedAt?: DateTimeWithAggregatesFilter<"PolicyTrigger"> | Date | string
    payoutId?: IntNullableWithAggregatesFilter<"PolicyTrigger"> | number | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    policyId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentTxHash?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    policyId?: SortOrder
    amount?: SortOrder
    paymentTxHash?: SortOrderInput | SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    policy?: PolicyOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    paymentTxHash?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    policyId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
  }, "id" | "paymentTxHash">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    policyId?: SortOrder
    amount?: SortOrder
    paymentTxHash?: SortOrderInput | SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    policyId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentTxHash?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type PayoutWhereInput = {
    AND?: PayoutWhereInput | PayoutWhereInput[]
    OR?: PayoutWhereInput[]
    NOT?: PayoutWhereInput | PayoutWhereInput[]
    id?: IntFilter<"Payout"> | number
    policyId?: IntNullableFilter<"Payout"> | number | null
    riskPoolId?: IntNullableFilter<"Payout"> | number | null
    payoutAmount?: DecimalFilter<"Payout"> | Decimal | DecimalJsLike | number | string
    payoutTxHash?: StringNullableFilter<"Payout"> | string | null
    paidAt?: DateTimeNullableFilter<"Payout"> | Date | string | null
    createdAt?: DateTimeFilter<"Payout"> | Date | string
    policy?: XOR<PolicyNullableRelationFilter, PolicyWhereInput> | null
    riskPool?: XOR<RiskPoolNullableRelationFilter, RiskPoolWhereInput> | null
    policyTriggers?: PolicyTriggerListRelationFilter
  }

  export type PayoutOrderByWithRelationInput = {
    id?: SortOrder
    policyId?: SortOrderInput | SortOrder
    riskPoolId?: SortOrderInput | SortOrder
    payoutAmount?: SortOrder
    payoutTxHash?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    policy?: PolicyOrderByWithRelationInput
    riskPool?: RiskPoolOrderByWithRelationInput
    policyTriggers?: PolicyTriggerOrderByRelationAggregateInput
  }

  export type PayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PayoutWhereInput | PayoutWhereInput[]
    OR?: PayoutWhereInput[]
    NOT?: PayoutWhereInput | PayoutWhereInput[]
    policyId?: IntNullableFilter<"Payout"> | number | null
    riskPoolId?: IntNullableFilter<"Payout"> | number | null
    payoutAmount?: DecimalFilter<"Payout"> | Decimal | DecimalJsLike | number | string
    payoutTxHash?: StringNullableFilter<"Payout"> | string | null
    paidAt?: DateTimeNullableFilter<"Payout"> | Date | string | null
    createdAt?: DateTimeFilter<"Payout"> | Date | string
    policy?: XOR<PolicyNullableRelationFilter, PolicyWhereInput> | null
    riskPool?: XOR<RiskPoolNullableRelationFilter, RiskPoolWhereInput> | null
    policyTriggers?: PolicyTriggerListRelationFilter
  }, "id">

  export type PayoutOrderByWithAggregationInput = {
    id?: SortOrder
    policyId?: SortOrderInput | SortOrder
    riskPoolId?: SortOrderInput | SortOrder
    payoutAmount?: SortOrder
    payoutTxHash?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PayoutCountOrderByAggregateInput
    _avg?: PayoutAvgOrderByAggregateInput
    _max?: PayoutMaxOrderByAggregateInput
    _min?: PayoutMinOrderByAggregateInput
    _sum?: PayoutSumOrderByAggregateInput
  }

  export type PayoutScalarWhereWithAggregatesInput = {
    AND?: PayoutScalarWhereWithAggregatesInput | PayoutScalarWhereWithAggregatesInput[]
    OR?: PayoutScalarWhereWithAggregatesInput[]
    NOT?: PayoutScalarWhereWithAggregatesInput | PayoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payout"> | number
    policyId?: IntNullableWithAggregatesFilter<"Payout"> | number | null
    riskPoolId?: IntNullableWithAggregatesFilter<"Payout"> | number | null
    payoutAmount?: DecimalWithAggregatesFilter<"Payout"> | Decimal | DecimalJsLike | number | string
    payoutTxHash?: StringNullableWithAggregatesFilter<"Payout"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payout"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payout"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    fullName?: string | null
    phoneNumber?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyCreateNestedManyWithoutUserInput
    capitalProviders?: CapitalProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    fullName?: string | null
    phoneNumber?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutUserInput
    capitalProviders?: CapitalProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUpdateManyWithoutUserNestedInput
    capitalProviders?: CapitalProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutUserNestedInput
    capitalProviders?: CapitalProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    fullName?: string | null
    phoneNumber?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    riskPools?: RiskPoolCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    riskPools?: RiskPoolUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskPools?: RiskPoolUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskPools?: RiskPoolUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeCreateInput = {
    name: string
    description?: string | null
    riskPools?: RiskPoolCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    riskPools?: RiskPoolUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskPools?: RiskPoolUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    riskPools?: RiskPoolUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type EventTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RiskPoolCreateInput = {
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    community: CommunityCreateNestedOneWithoutRiskPoolsInput
    eventType: EventTypeCreateNestedOneWithoutRiskPoolsInput
    policies?: PolicyCreateNestedManyWithoutRiskPoolInput
    capitalProviders?: CapitalProviderCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolUncheckedCreateInput = {
    id?: number
    communityId: number
    eventTypeId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutRiskPoolInput
    capitalProviders?: CapitalProviderUncheckedCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolUpdateInput = {
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutRiskPoolsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutRiskPoolsNestedInput
    policies?: PolicyUpdateManyWithoutRiskPoolNestedInput
    capitalProviders?: CapitalProviderUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutRiskPoolNestedInput
    capitalProviders?: CapitalProviderUncheckedUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolCreateManyInput = {
    id?: number
    communityId: number
    eventTypeId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RiskPoolUpdateManyMutationInput = {
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskPoolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapitalProviderCreateInput = {
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCapitalProvidersInput
    riskPool: RiskPoolCreateNestedOneWithoutCapitalProvidersInput
  }

  export type CapitalProviderUncheckedCreateInput = {
    id?: number
    userId: number
    riskPoolId: number
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
  }

  export type CapitalProviderUpdateInput = {
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCapitalProvidersNestedInput
    riskPool?: RiskPoolUpdateOneRequiredWithoutCapitalProvidersNestedInput
  }

  export type CapitalProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapitalProviderCreateManyInput = {
    id?: number
    userId: number
    riskPoolId: number
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
  }

  export type CapitalProviderUpdateManyMutationInput = {
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapitalProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateInput = {
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPoliciesInput
    riskPool: RiskPoolCreateNestedOneWithoutPoliciesInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutPolicyInput
    payments?: PaymentCreateNestedManyWithoutPolicyInput
    payouts?: PayoutCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateInput = {
    id?: number
    userId: number
    riskPoolId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutPolicyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPolicyInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUpdateInput = {
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoliciesNestedInput
    riskPool?: RiskPoolUpdateOneRequiredWithoutPoliciesNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutPolicyNestedInput
    payments?: PaymentUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutPolicyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateManyInput = {
    id?: number
    userId: number
    riskPoolId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUpdateManyMutationInput = {
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OracleSourceCreateInput = {
    name: string
    sourceType?: string | null
    endpoint?: string | null
    createdAt?: Date | string
    oracleData?: OracleDataCreateNestedManyWithoutOracleSourceInput
  }

  export type OracleSourceUncheckedCreateInput = {
    id?: number
    name: string
    sourceType?: string | null
    endpoint?: string | null
    createdAt?: Date | string
    oracleData?: OracleDataUncheckedCreateNestedManyWithoutOracleSourceInput
  }

  export type OracleSourceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oracleData?: OracleDataUpdateManyWithoutOracleSourceNestedInput
  }

  export type OracleSourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oracleData?: OracleDataUncheckedUpdateManyWithoutOracleSourceNestedInput
  }

  export type OracleSourceCreateManyInput = {
    id?: number
    name: string
    sourceType?: string | null
    endpoint?: string | null
    createdAt?: Date | string
  }

  export type OracleSourceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OracleSourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OracleDataCreateInput = {
    timestamp: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    oracleSource: OracleSourceCreateNestedOneWithoutOracleDataInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutOracleDataInput
  }

  export type OracleDataUncheckedCreateInput = {
    id?: number
    oracleSourceId: number
    timestamp: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutOracleDataInput
  }

  export type OracleDataUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oracleSource?: OracleSourceUpdateOneRequiredWithoutOracleDataNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutOracleDataNestedInput
  }

  export type OracleDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    oracleSourceId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutOracleDataNestedInput
  }

  export type OracleDataCreateManyInput = {
    id?: number
    oracleSourceId: number
    timestamp: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OracleDataUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OracleDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oracleSourceId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTriggerCreateInput = {
    triggered?: boolean
    triggerCheckedAt?: Date | string
    policy: PolicyCreateNestedOneWithoutPolicyTriggersInput
    oracleData: OracleDataCreateNestedOneWithoutPolicyTriggersInput
    payout?: PayoutCreateNestedOneWithoutPolicyTriggersInput
  }

  export type PolicyTriggerUncheckedCreateInput = {
    id?: number
    policyId: number
    oracleDataId: number
    triggered?: boolean
    triggerCheckedAt?: Date | string
    payoutId?: number | null
  }

  export type PolicyTriggerUpdateInput = {
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneRequiredWithoutPolicyTriggersNestedInput
    oracleData?: OracleDataUpdateOneRequiredWithoutPolicyTriggersNestedInput
    payout?: PayoutUpdateOneWithoutPolicyTriggersNestedInput
  }

  export type PolicyTriggerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
    oracleDataId?: IntFieldUpdateOperationsInput | number
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payoutId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyTriggerCreateManyInput = {
    id?: number
    policyId: number
    oracleDataId: number
    triggered?: boolean
    triggerCheckedAt?: Date | string
    payoutId?: number | null
  }

  export type PolicyTriggerUpdateManyMutationInput = {
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTriggerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
    oracleDataId?: IntFieldUpdateOperationsInput | number
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payoutId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    paymentTxHash?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
    policy: PolicyCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    policyId: number
    amount: Decimal | DecimalJsLike | number | string
    paymentTxHash?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    policyId: number
    amount: Decimal | DecimalJsLike | number | string
    paymentTxHash?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutCreateInput = {
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    policy?: PolicyCreateNestedOneWithoutPayoutsInput
    riskPool?: RiskPoolCreateNestedOneWithoutPayoutsInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutPayoutInput
  }

  export type PayoutUncheckedCreateInput = {
    id?: number
    policyId?: number | null
    riskPoolId?: number | null
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutPayoutInput
  }

  export type PayoutUpdateInput = {
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneWithoutPayoutsNestedInput
    riskPool?: RiskPoolUpdateOneWithoutPayoutsNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutPayoutNestedInput
  }

  export type PayoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
    riskPoolId?: NullableIntFieldUpdateOperationsInput | number | null
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutPayoutNestedInput
  }

  export type PayoutCreateManyInput = {
    id?: number
    policyId?: number | null
    riskPoolId?: number | null
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PayoutUpdateManyMutationInput = {
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
    riskPoolId?: NullableIntFieldUpdateOperationsInput | number | null
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type PolicyListRelationFilter = {
    every?: PolicyWhereInput
    some?: PolicyWhereInput
    none?: PolicyWhereInput
  }

  export type CapitalProviderListRelationFilter = {
    every?: CapitalProviderWhereInput
    some?: CapitalProviderWhereInput
    none?: CapitalProviderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CapitalProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type RiskPoolListRelationFilter = {
    every?: RiskPoolWhereInput
    some?: RiskPoolWhereInput
    none?: RiskPoolWhereInput
  }

  export type RiskPoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type EventTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type EventTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type EventTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CommunityRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type EventTypeRelationFilter = {
    is?: EventTypeWhereInput
    isNot?: EventTypeWhereInput
  }

  export type PayoutListRelationFilter = {
    every?: PayoutWhereInput
    some?: PayoutWhereInput
    none?: PayoutWhereInput
  }

  export type PayoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiskPoolCountOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    eventTypeId?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskPoolAvgOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    eventTypeId?: SortOrder
    totalCapital?: SortOrder
  }

  export type RiskPoolMaxOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    eventTypeId?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskPoolMinOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    eventTypeId?: SortOrder
    totalCapital?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskPoolSumOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    eventTypeId?: SortOrder
    totalCapital?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RiskPoolRelationFilter = {
    is?: RiskPoolWhereInput
    isNot?: RiskPoolWhereInput
  }

  export type CapitalProviderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    stakeAmount?: SortOrder
    stakeDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CapitalProviderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    stakeAmount?: SortOrder
  }

  export type CapitalProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    stakeAmount?: SortOrder
    stakeDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CapitalProviderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    stakeAmount?: SortOrder
    stakeDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CapitalProviderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    stakeAmount?: SortOrder
  }

  export type PolicyTriggerListRelationFilter = {
    every?: PolicyTriggerWhereInput
    some?: PolicyTriggerWhereInput
    none?: PolicyTriggerWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PolicyTriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    coverageAmount?: SortOrder
    premiumAmount?: SortOrder
    coverageStart?: SortOrder
    coverageEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    coverageAmount?: SortOrder
    premiumAmount?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    coverageAmount?: SortOrder
    premiumAmount?: SortOrder
    coverageStart?: SortOrder
    coverageEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    coverageAmount?: SortOrder
    premiumAmount?: SortOrder
    coverageStart?: SortOrder
    coverageEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    riskPoolId?: SortOrder
    coverageAmount?: SortOrder
    premiumAmount?: SortOrder
  }

  export type OracleDataListRelationFilter = {
    every?: OracleDataWhereInput
    some?: OracleDataWhereInput
    none?: OracleDataWhereInput
  }

  export type OracleDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OracleSourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceType?: SortOrder
    endpoint?: SortOrder
    createdAt?: SortOrder
  }

  export type OracleSourceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OracleSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceType?: SortOrder
    endpoint?: SortOrder
    createdAt?: SortOrder
  }

  export type OracleSourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceType?: SortOrder
    endpoint?: SortOrder
    createdAt?: SortOrder
  }

  export type OracleSourceSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OracleSourceRelationFilter = {
    is?: OracleSourceWhereInput
    isNot?: OracleSourceWhereInput
  }

  export type OracleDataCountOrderByAggregateInput = {
    id?: SortOrder
    oracleSourceId?: SortOrder
    timestamp?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type OracleDataAvgOrderByAggregateInput = {
    id?: SortOrder
    oracleSourceId?: SortOrder
  }

  export type OracleDataMaxOrderByAggregateInput = {
    id?: SortOrder
    oracleSourceId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type OracleDataMinOrderByAggregateInput = {
    id?: SortOrder
    oracleSourceId?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type OracleDataSumOrderByAggregateInput = {
    id?: SortOrder
    oracleSourceId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PolicyRelationFilter = {
    is?: PolicyWhereInput
    isNot?: PolicyWhereInput
  }

  export type OracleDataRelationFilter = {
    is?: OracleDataWhereInput
    isNot?: OracleDataWhereInput
  }

  export type PayoutNullableRelationFilter = {
    is?: PayoutWhereInput | null
    isNot?: PayoutWhereInput | null
  }

  export type PolicyTriggerCountOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    oracleDataId?: SortOrder
    triggered?: SortOrder
    triggerCheckedAt?: SortOrder
    payoutId?: SortOrder
  }

  export type PolicyTriggerAvgOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    oracleDataId?: SortOrder
    payoutId?: SortOrder
  }

  export type PolicyTriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    oracleDataId?: SortOrder
    triggered?: SortOrder
    triggerCheckedAt?: SortOrder
    payoutId?: SortOrder
  }

  export type PolicyTriggerMinOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    oracleDataId?: SortOrder
    triggered?: SortOrder
    triggerCheckedAt?: SortOrder
    payoutId?: SortOrder
  }

  export type PolicyTriggerSumOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    oracleDataId?: SortOrder
    payoutId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    amount?: SortOrder
    paymentTxHash?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    amount?: SortOrder
    paymentTxHash?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    amount?: SortOrder
    paymentTxHash?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    amount?: SortOrder
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

  export type PolicyNullableRelationFilter = {
    is?: PolicyWhereInput | null
    isNot?: PolicyWhereInput | null
  }

  export type RiskPoolNullableRelationFilter = {
    is?: RiskPoolWhereInput | null
    isNot?: RiskPoolWhereInput | null
  }

  export type PayoutCountOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    riskPoolId?: SortOrder
    payoutAmount?: SortOrder
    payoutTxHash?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PayoutAvgOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    riskPoolId?: SortOrder
    payoutAmount?: SortOrder
  }

  export type PayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    riskPoolId?: SortOrder
    payoutAmount?: SortOrder
    payoutTxHash?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PayoutMinOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    riskPoolId?: SortOrder
    payoutAmount?: SortOrder
    payoutTxHash?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PayoutSumOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    riskPoolId?: SortOrder
    payoutAmount?: SortOrder
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

  export type PolicyCreateNestedManyWithoutUserInput = {
    create?: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput> | PolicyCreateWithoutUserInput[] | PolicyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutUserInput | PolicyCreateOrConnectWithoutUserInput[]
    createMany?: PolicyCreateManyUserInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type CapitalProviderCreateNestedManyWithoutUserInput = {
    create?: XOR<CapitalProviderCreateWithoutUserInput, CapitalProviderUncheckedCreateWithoutUserInput> | CapitalProviderCreateWithoutUserInput[] | CapitalProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CapitalProviderCreateOrConnectWithoutUserInput | CapitalProviderCreateOrConnectWithoutUserInput[]
    createMany?: CapitalProviderCreateManyUserInputEnvelope
    connect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
  }

  export type PolicyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput> | PolicyCreateWithoutUserInput[] | PolicyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutUserInput | PolicyCreateOrConnectWithoutUserInput[]
    createMany?: PolicyCreateManyUserInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type CapitalProviderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CapitalProviderCreateWithoutUserInput, CapitalProviderUncheckedCreateWithoutUserInput> | CapitalProviderCreateWithoutUserInput[] | CapitalProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CapitalProviderCreateOrConnectWithoutUserInput | CapitalProviderCreateOrConnectWithoutUserInput[]
    createMany?: CapitalProviderCreateManyUserInputEnvelope
    connect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PolicyUpdateManyWithoutUserNestedInput = {
    create?: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput> | PolicyCreateWithoutUserInput[] | PolicyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutUserInput | PolicyCreateOrConnectWithoutUserInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutUserInput | PolicyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PolicyCreateManyUserInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutUserInput | PolicyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutUserInput | PolicyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type CapitalProviderUpdateManyWithoutUserNestedInput = {
    create?: XOR<CapitalProviderCreateWithoutUserInput, CapitalProviderUncheckedCreateWithoutUserInput> | CapitalProviderCreateWithoutUserInput[] | CapitalProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CapitalProviderCreateOrConnectWithoutUserInput | CapitalProviderCreateOrConnectWithoutUserInput[]
    upsert?: CapitalProviderUpsertWithWhereUniqueWithoutUserInput | CapitalProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CapitalProviderCreateManyUserInputEnvelope
    set?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    disconnect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    delete?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    connect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    update?: CapitalProviderUpdateWithWhereUniqueWithoutUserInput | CapitalProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CapitalProviderUpdateManyWithWhereWithoutUserInput | CapitalProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CapitalProviderScalarWhereInput | CapitalProviderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PolicyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput> | PolicyCreateWithoutUserInput[] | PolicyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutUserInput | PolicyCreateOrConnectWithoutUserInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutUserInput | PolicyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PolicyCreateManyUserInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutUserInput | PolicyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutUserInput | PolicyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type CapitalProviderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CapitalProviderCreateWithoutUserInput, CapitalProviderUncheckedCreateWithoutUserInput> | CapitalProviderCreateWithoutUserInput[] | CapitalProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CapitalProviderCreateOrConnectWithoutUserInput | CapitalProviderCreateOrConnectWithoutUserInput[]
    upsert?: CapitalProviderUpsertWithWhereUniqueWithoutUserInput | CapitalProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CapitalProviderCreateManyUserInputEnvelope
    set?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    disconnect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    delete?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    connect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    update?: CapitalProviderUpdateWithWhereUniqueWithoutUserInput | CapitalProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CapitalProviderUpdateManyWithWhereWithoutUserInput | CapitalProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CapitalProviderScalarWhereInput | CapitalProviderScalarWhereInput[]
  }

  export type RiskPoolCreateNestedManyWithoutCommunityInput = {
    create?: XOR<RiskPoolCreateWithoutCommunityInput, RiskPoolUncheckedCreateWithoutCommunityInput> | RiskPoolCreateWithoutCommunityInput[] | RiskPoolUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: RiskPoolCreateOrConnectWithoutCommunityInput | RiskPoolCreateOrConnectWithoutCommunityInput[]
    createMany?: RiskPoolCreateManyCommunityInputEnvelope
    connect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
  }

  export type RiskPoolUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<RiskPoolCreateWithoutCommunityInput, RiskPoolUncheckedCreateWithoutCommunityInput> | RiskPoolCreateWithoutCommunityInput[] | RiskPoolUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: RiskPoolCreateOrConnectWithoutCommunityInput | RiskPoolCreateOrConnectWithoutCommunityInput[]
    createMany?: RiskPoolCreateManyCommunityInputEnvelope
    connect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
  }

  export type RiskPoolUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<RiskPoolCreateWithoutCommunityInput, RiskPoolUncheckedCreateWithoutCommunityInput> | RiskPoolCreateWithoutCommunityInput[] | RiskPoolUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: RiskPoolCreateOrConnectWithoutCommunityInput | RiskPoolCreateOrConnectWithoutCommunityInput[]
    upsert?: RiskPoolUpsertWithWhereUniqueWithoutCommunityInput | RiskPoolUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: RiskPoolCreateManyCommunityInputEnvelope
    set?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    disconnect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    delete?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    connect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    update?: RiskPoolUpdateWithWhereUniqueWithoutCommunityInput | RiskPoolUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: RiskPoolUpdateManyWithWhereWithoutCommunityInput | RiskPoolUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: RiskPoolScalarWhereInput | RiskPoolScalarWhereInput[]
  }

  export type RiskPoolUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<RiskPoolCreateWithoutCommunityInput, RiskPoolUncheckedCreateWithoutCommunityInput> | RiskPoolCreateWithoutCommunityInput[] | RiskPoolUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: RiskPoolCreateOrConnectWithoutCommunityInput | RiskPoolCreateOrConnectWithoutCommunityInput[]
    upsert?: RiskPoolUpsertWithWhereUniqueWithoutCommunityInput | RiskPoolUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: RiskPoolCreateManyCommunityInputEnvelope
    set?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    disconnect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    delete?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    connect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    update?: RiskPoolUpdateWithWhereUniqueWithoutCommunityInput | RiskPoolUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: RiskPoolUpdateManyWithWhereWithoutCommunityInput | RiskPoolUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: RiskPoolScalarWhereInput | RiskPoolScalarWhereInput[]
  }

  export type RiskPoolCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<RiskPoolCreateWithoutEventTypeInput, RiskPoolUncheckedCreateWithoutEventTypeInput> | RiskPoolCreateWithoutEventTypeInput[] | RiskPoolUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: RiskPoolCreateOrConnectWithoutEventTypeInput | RiskPoolCreateOrConnectWithoutEventTypeInput[]
    createMany?: RiskPoolCreateManyEventTypeInputEnvelope
    connect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
  }

  export type RiskPoolUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<RiskPoolCreateWithoutEventTypeInput, RiskPoolUncheckedCreateWithoutEventTypeInput> | RiskPoolCreateWithoutEventTypeInput[] | RiskPoolUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: RiskPoolCreateOrConnectWithoutEventTypeInput | RiskPoolCreateOrConnectWithoutEventTypeInput[]
    createMany?: RiskPoolCreateManyEventTypeInputEnvelope
    connect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
  }

  export type RiskPoolUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<RiskPoolCreateWithoutEventTypeInput, RiskPoolUncheckedCreateWithoutEventTypeInput> | RiskPoolCreateWithoutEventTypeInput[] | RiskPoolUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: RiskPoolCreateOrConnectWithoutEventTypeInput | RiskPoolCreateOrConnectWithoutEventTypeInput[]
    upsert?: RiskPoolUpsertWithWhereUniqueWithoutEventTypeInput | RiskPoolUpsertWithWhereUniqueWithoutEventTypeInput[]
    createMany?: RiskPoolCreateManyEventTypeInputEnvelope
    set?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    disconnect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    delete?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    connect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    update?: RiskPoolUpdateWithWhereUniqueWithoutEventTypeInput | RiskPoolUpdateWithWhereUniqueWithoutEventTypeInput[]
    updateMany?: RiskPoolUpdateManyWithWhereWithoutEventTypeInput | RiskPoolUpdateManyWithWhereWithoutEventTypeInput[]
    deleteMany?: RiskPoolScalarWhereInput | RiskPoolScalarWhereInput[]
  }

  export type RiskPoolUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<RiskPoolCreateWithoutEventTypeInput, RiskPoolUncheckedCreateWithoutEventTypeInput> | RiskPoolCreateWithoutEventTypeInput[] | RiskPoolUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: RiskPoolCreateOrConnectWithoutEventTypeInput | RiskPoolCreateOrConnectWithoutEventTypeInput[]
    upsert?: RiskPoolUpsertWithWhereUniqueWithoutEventTypeInput | RiskPoolUpsertWithWhereUniqueWithoutEventTypeInput[]
    createMany?: RiskPoolCreateManyEventTypeInputEnvelope
    set?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    disconnect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    delete?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    connect?: RiskPoolWhereUniqueInput | RiskPoolWhereUniqueInput[]
    update?: RiskPoolUpdateWithWhereUniqueWithoutEventTypeInput | RiskPoolUpdateWithWhereUniqueWithoutEventTypeInput[]
    updateMany?: RiskPoolUpdateManyWithWhereWithoutEventTypeInput | RiskPoolUpdateManyWithWhereWithoutEventTypeInput[]
    deleteMany?: RiskPoolScalarWhereInput | RiskPoolScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutRiskPoolsInput = {
    create?: XOR<CommunityCreateWithoutRiskPoolsInput, CommunityUncheckedCreateWithoutRiskPoolsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutRiskPoolsInput
    connect?: CommunityWhereUniqueInput
  }

  export type EventTypeCreateNestedOneWithoutRiskPoolsInput = {
    create?: XOR<EventTypeCreateWithoutRiskPoolsInput, EventTypeUncheckedCreateWithoutRiskPoolsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutRiskPoolsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type PolicyCreateNestedManyWithoutRiskPoolInput = {
    create?: XOR<PolicyCreateWithoutRiskPoolInput, PolicyUncheckedCreateWithoutRiskPoolInput> | PolicyCreateWithoutRiskPoolInput[] | PolicyUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutRiskPoolInput | PolicyCreateOrConnectWithoutRiskPoolInput[]
    createMany?: PolicyCreateManyRiskPoolInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type CapitalProviderCreateNestedManyWithoutRiskPoolInput = {
    create?: XOR<CapitalProviderCreateWithoutRiskPoolInput, CapitalProviderUncheckedCreateWithoutRiskPoolInput> | CapitalProviderCreateWithoutRiskPoolInput[] | CapitalProviderUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: CapitalProviderCreateOrConnectWithoutRiskPoolInput | CapitalProviderCreateOrConnectWithoutRiskPoolInput[]
    createMany?: CapitalProviderCreateManyRiskPoolInputEnvelope
    connect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
  }

  export type PayoutCreateNestedManyWithoutRiskPoolInput = {
    create?: XOR<PayoutCreateWithoutRiskPoolInput, PayoutUncheckedCreateWithoutRiskPoolInput> | PayoutCreateWithoutRiskPoolInput[] | PayoutUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutRiskPoolInput | PayoutCreateOrConnectWithoutRiskPoolInput[]
    createMany?: PayoutCreateManyRiskPoolInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type PolicyUncheckedCreateNestedManyWithoutRiskPoolInput = {
    create?: XOR<PolicyCreateWithoutRiskPoolInput, PolicyUncheckedCreateWithoutRiskPoolInput> | PolicyCreateWithoutRiskPoolInput[] | PolicyUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutRiskPoolInput | PolicyCreateOrConnectWithoutRiskPoolInput[]
    createMany?: PolicyCreateManyRiskPoolInputEnvelope
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
  }

  export type CapitalProviderUncheckedCreateNestedManyWithoutRiskPoolInput = {
    create?: XOR<CapitalProviderCreateWithoutRiskPoolInput, CapitalProviderUncheckedCreateWithoutRiskPoolInput> | CapitalProviderCreateWithoutRiskPoolInput[] | CapitalProviderUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: CapitalProviderCreateOrConnectWithoutRiskPoolInput | CapitalProviderCreateOrConnectWithoutRiskPoolInput[]
    createMany?: CapitalProviderCreateManyRiskPoolInputEnvelope
    connect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
  }

  export type PayoutUncheckedCreateNestedManyWithoutRiskPoolInput = {
    create?: XOR<PayoutCreateWithoutRiskPoolInput, PayoutUncheckedCreateWithoutRiskPoolInput> | PayoutCreateWithoutRiskPoolInput[] | PayoutUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutRiskPoolInput | PayoutCreateOrConnectWithoutRiskPoolInput[]
    createMany?: PayoutCreateManyRiskPoolInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CommunityUpdateOneRequiredWithoutRiskPoolsNestedInput = {
    create?: XOR<CommunityCreateWithoutRiskPoolsInput, CommunityUncheckedCreateWithoutRiskPoolsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutRiskPoolsInput
    upsert?: CommunityUpsertWithoutRiskPoolsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutRiskPoolsInput, CommunityUpdateWithoutRiskPoolsInput>, CommunityUncheckedUpdateWithoutRiskPoolsInput>
  }

  export type EventTypeUpdateOneRequiredWithoutRiskPoolsNestedInput = {
    create?: XOR<EventTypeCreateWithoutRiskPoolsInput, EventTypeUncheckedCreateWithoutRiskPoolsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutRiskPoolsInput
    upsert?: EventTypeUpsertWithoutRiskPoolsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<XOR<EventTypeUpdateToOneWithWhereWithoutRiskPoolsInput, EventTypeUpdateWithoutRiskPoolsInput>, EventTypeUncheckedUpdateWithoutRiskPoolsInput>
  }

  export type PolicyUpdateManyWithoutRiskPoolNestedInput = {
    create?: XOR<PolicyCreateWithoutRiskPoolInput, PolicyUncheckedCreateWithoutRiskPoolInput> | PolicyCreateWithoutRiskPoolInput[] | PolicyUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutRiskPoolInput | PolicyCreateOrConnectWithoutRiskPoolInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutRiskPoolInput | PolicyUpsertWithWhereUniqueWithoutRiskPoolInput[]
    createMany?: PolicyCreateManyRiskPoolInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutRiskPoolInput | PolicyUpdateWithWhereUniqueWithoutRiskPoolInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutRiskPoolInput | PolicyUpdateManyWithWhereWithoutRiskPoolInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type CapitalProviderUpdateManyWithoutRiskPoolNestedInput = {
    create?: XOR<CapitalProviderCreateWithoutRiskPoolInput, CapitalProviderUncheckedCreateWithoutRiskPoolInput> | CapitalProviderCreateWithoutRiskPoolInput[] | CapitalProviderUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: CapitalProviderCreateOrConnectWithoutRiskPoolInput | CapitalProviderCreateOrConnectWithoutRiskPoolInput[]
    upsert?: CapitalProviderUpsertWithWhereUniqueWithoutRiskPoolInput | CapitalProviderUpsertWithWhereUniqueWithoutRiskPoolInput[]
    createMany?: CapitalProviderCreateManyRiskPoolInputEnvelope
    set?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    disconnect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    delete?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    connect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    update?: CapitalProviderUpdateWithWhereUniqueWithoutRiskPoolInput | CapitalProviderUpdateWithWhereUniqueWithoutRiskPoolInput[]
    updateMany?: CapitalProviderUpdateManyWithWhereWithoutRiskPoolInput | CapitalProviderUpdateManyWithWhereWithoutRiskPoolInput[]
    deleteMany?: CapitalProviderScalarWhereInput | CapitalProviderScalarWhereInput[]
  }

  export type PayoutUpdateManyWithoutRiskPoolNestedInput = {
    create?: XOR<PayoutCreateWithoutRiskPoolInput, PayoutUncheckedCreateWithoutRiskPoolInput> | PayoutCreateWithoutRiskPoolInput[] | PayoutUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutRiskPoolInput | PayoutCreateOrConnectWithoutRiskPoolInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutRiskPoolInput | PayoutUpsertWithWhereUniqueWithoutRiskPoolInput[]
    createMany?: PayoutCreateManyRiskPoolInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutRiskPoolInput | PayoutUpdateWithWhereUniqueWithoutRiskPoolInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutRiskPoolInput | PayoutUpdateManyWithWhereWithoutRiskPoolInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type PolicyUncheckedUpdateManyWithoutRiskPoolNestedInput = {
    create?: XOR<PolicyCreateWithoutRiskPoolInput, PolicyUncheckedCreateWithoutRiskPoolInput> | PolicyCreateWithoutRiskPoolInput[] | PolicyUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: PolicyCreateOrConnectWithoutRiskPoolInput | PolicyCreateOrConnectWithoutRiskPoolInput[]
    upsert?: PolicyUpsertWithWhereUniqueWithoutRiskPoolInput | PolicyUpsertWithWhereUniqueWithoutRiskPoolInput[]
    createMany?: PolicyCreateManyRiskPoolInputEnvelope
    set?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    disconnect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    delete?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    connect?: PolicyWhereUniqueInput | PolicyWhereUniqueInput[]
    update?: PolicyUpdateWithWhereUniqueWithoutRiskPoolInput | PolicyUpdateWithWhereUniqueWithoutRiskPoolInput[]
    updateMany?: PolicyUpdateManyWithWhereWithoutRiskPoolInput | PolicyUpdateManyWithWhereWithoutRiskPoolInput[]
    deleteMany?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
  }

  export type CapitalProviderUncheckedUpdateManyWithoutRiskPoolNestedInput = {
    create?: XOR<CapitalProviderCreateWithoutRiskPoolInput, CapitalProviderUncheckedCreateWithoutRiskPoolInput> | CapitalProviderCreateWithoutRiskPoolInput[] | CapitalProviderUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: CapitalProviderCreateOrConnectWithoutRiskPoolInput | CapitalProviderCreateOrConnectWithoutRiskPoolInput[]
    upsert?: CapitalProviderUpsertWithWhereUniqueWithoutRiskPoolInput | CapitalProviderUpsertWithWhereUniqueWithoutRiskPoolInput[]
    createMany?: CapitalProviderCreateManyRiskPoolInputEnvelope
    set?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    disconnect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    delete?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    connect?: CapitalProviderWhereUniqueInput | CapitalProviderWhereUniqueInput[]
    update?: CapitalProviderUpdateWithWhereUniqueWithoutRiskPoolInput | CapitalProviderUpdateWithWhereUniqueWithoutRiskPoolInput[]
    updateMany?: CapitalProviderUpdateManyWithWhereWithoutRiskPoolInput | CapitalProviderUpdateManyWithWhereWithoutRiskPoolInput[]
    deleteMany?: CapitalProviderScalarWhereInput | CapitalProviderScalarWhereInput[]
  }

  export type PayoutUncheckedUpdateManyWithoutRiskPoolNestedInput = {
    create?: XOR<PayoutCreateWithoutRiskPoolInput, PayoutUncheckedCreateWithoutRiskPoolInput> | PayoutCreateWithoutRiskPoolInput[] | PayoutUncheckedCreateWithoutRiskPoolInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutRiskPoolInput | PayoutCreateOrConnectWithoutRiskPoolInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutRiskPoolInput | PayoutUpsertWithWhereUniqueWithoutRiskPoolInput[]
    createMany?: PayoutCreateManyRiskPoolInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutRiskPoolInput | PayoutUpdateWithWhereUniqueWithoutRiskPoolInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutRiskPoolInput | PayoutUpdateManyWithWhereWithoutRiskPoolInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCapitalProvidersInput = {
    create?: XOR<UserCreateWithoutCapitalProvidersInput, UserUncheckedCreateWithoutCapitalProvidersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCapitalProvidersInput
    connect?: UserWhereUniqueInput
  }

  export type RiskPoolCreateNestedOneWithoutCapitalProvidersInput = {
    create?: XOR<RiskPoolCreateWithoutCapitalProvidersInput, RiskPoolUncheckedCreateWithoutCapitalProvidersInput>
    connectOrCreate?: RiskPoolCreateOrConnectWithoutCapitalProvidersInput
    connect?: RiskPoolWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCapitalProvidersNestedInput = {
    create?: XOR<UserCreateWithoutCapitalProvidersInput, UserUncheckedCreateWithoutCapitalProvidersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCapitalProvidersInput
    upsert?: UserUpsertWithoutCapitalProvidersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCapitalProvidersInput, UserUpdateWithoutCapitalProvidersInput>, UserUncheckedUpdateWithoutCapitalProvidersInput>
  }

  export type RiskPoolUpdateOneRequiredWithoutCapitalProvidersNestedInput = {
    create?: XOR<RiskPoolCreateWithoutCapitalProvidersInput, RiskPoolUncheckedCreateWithoutCapitalProvidersInput>
    connectOrCreate?: RiskPoolCreateOrConnectWithoutCapitalProvidersInput
    upsert?: RiskPoolUpsertWithoutCapitalProvidersInput
    connect?: RiskPoolWhereUniqueInput
    update?: XOR<XOR<RiskPoolUpdateToOneWithWhereWithoutCapitalProvidersInput, RiskPoolUpdateWithoutCapitalProvidersInput>, RiskPoolUncheckedUpdateWithoutCapitalProvidersInput>
  }

  export type UserCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<UserCreateWithoutPoliciesInput, UserUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPoliciesInput
    connect?: UserWhereUniqueInput
  }

  export type RiskPoolCreateNestedOneWithoutPoliciesInput = {
    create?: XOR<RiskPoolCreateWithoutPoliciesInput, RiskPoolUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: RiskPoolCreateOrConnectWithoutPoliciesInput
    connect?: RiskPoolWhereUniqueInput
  }

  export type PolicyTriggerCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PolicyTriggerCreateWithoutPolicyInput, PolicyTriggerUncheckedCreateWithoutPolicyInput> | PolicyTriggerCreateWithoutPolicyInput[] | PolicyTriggerUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutPolicyInput | PolicyTriggerCreateOrConnectWithoutPolicyInput[]
    createMany?: PolicyTriggerCreateManyPolicyInputEnvelope
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PaymentCreateWithoutPolicyInput, PaymentUncheckedCreateWithoutPolicyInput> | PaymentCreateWithoutPolicyInput[] | PaymentUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPolicyInput | PaymentCreateOrConnectWithoutPolicyInput[]
    createMany?: PaymentCreateManyPolicyInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PayoutCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PayoutCreateWithoutPolicyInput, PayoutUncheckedCreateWithoutPolicyInput> | PayoutCreateWithoutPolicyInput[] | PayoutUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutPolicyInput | PayoutCreateOrConnectWithoutPolicyInput[]
    createMany?: PayoutCreateManyPolicyInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type PolicyTriggerUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PolicyTriggerCreateWithoutPolicyInput, PolicyTriggerUncheckedCreateWithoutPolicyInput> | PolicyTriggerCreateWithoutPolicyInput[] | PolicyTriggerUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutPolicyInput | PolicyTriggerCreateOrConnectWithoutPolicyInput[]
    createMany?: PolicyTriggerCreateManyPolicyInputEnvelope
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PaymentCreateWithoutPolicyInput, PaymentUncheckedCreateWithoutPolicyInput> | PaymentCreateWithoutPolicyInput[] | PaymentUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPolicyInput | PaymentCreateOrConnectWithoutPolicyInput[]
    createMany?: PaymentCreateManyPolicyInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PayoutUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PayoutCreateWithoutPolicyInput, PayoutUncheckedCreateWithoutPolicyInput> | PayoutCreateWithoutPolicyInput[] | PayoutUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutPolicyInput | PayoutCreateOrConnectWithoutPolicyInput[]
    createMany?: PayoutCreateManyPolicyInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<UserCreateWithoutPoliciesInput, UserUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPoliciesInput
    upsert?: UserUpsertWithoutPoliciesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPoliciesInput, UserUpdateWithoutPoliciesInput>, UserUncheckedUpdateWithoutPoliciesInput>
  }

  export type RiskPoolUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: XOR<RiskPoolCreateWithoutPoliciesInput, RiskPoolUncheckedCreateWithoutPoliciesInput>
    connectOrCreate?: RiskPoolCreateOrConnectWithoutPoliciesInput
    upsert?: RiskPoolUpsertWithoutPoliciesInput
    connect?: RiskPoolWhereUniqueInput
    update?: XOR<XOR<RiskPoolUpdateToOneWithWhereWithoutPoliciesInput, RiskPoolUpdateWithoutPoliciesInput>, RiskPoolUncheckedUpdateWithoutPoliciesInput>
  }

  export type PolicyTriggerUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PolicyTriggerCreateWithoutPolicyInput, PolicyTriggerUncheckedCreateWithoutPolicyInput> | PolicyTriggerCreateWithoutPolicyInput[] | PolicyTriggerUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutPolicyInput | PolicyTriggerCreateOrConnectWithoutPolicyInput[]
    upsert?: PolicyTriggerUpsertWithWhereUniqueWithoutPolicyInput | PolicyTriggerUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PolicyTriggerCreateManyPolicyInputEnvelope
    set?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    disconnect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    delete?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    update?: PolicyTriggerUpdateWithWhereUniqueWithoutPolicyInput | PolicyTriggerUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PolicyTriggerUpdateManyWithWhereWithoutPolicyInput | PolicyTriggerUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PolicyTriggerScalarWhereInput | PolicyTriggerScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PaymentCreateWithoutPolicyInput, PaymentUncheckedCreateWithoutPolicyInput> | PaymentCreateWithoutPolicyInput[] | PaymentUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPolicyInput | PaymentCreateOrConnectWithoutPolicyInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPolicyInput | PaymentUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PaymentCreateManyPolicyInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPolicyInput | PaymentUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPolicyInput | PaymentUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PayoutUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PayoutCreateWithoutPolicyInput, PayoutUncheckedCreateWithoutPolicyInput> | PayoutCreateWithoutPolicyInput[] | PayoutUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutPolicyInput | PayoutCreateOrConnectWithoutPolicyInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutPolicyInput | PayoutUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PayoutCreateManyPolicyInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutPolicyInput | PayoutUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutPolicyInput | PayoutUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type PolicyTriggerUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PolicyTriggerCreateWithoutPolicyInput, PolicyTriggerUncheckedCreateWithoutPolicyInput> | PolicyTriggerCreateWithoutPolicyInput[] | PolicyTriggerUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutPolicyInput | PolicyTriggerCreateOrConnectWithoutPolicyInput[]
    upsert?: PolicyTriggerUpsertWithWhereUniqueWithoutPolicyInput | PolicyTriggerUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PolicyTriggerCreateManyPolicyInputEnvelope
    set?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    disconnect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    delete?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    update?: PolicyTriggerUpdateWithWhereUniqueWithoutPolicyInput | PolicyTriggerUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PolicyTriggerUpdateManyWithWhereWithoutPolicyInput | PolicyTriggerUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PolicyTriggerScalarWhereInput | PolicyTriggerScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PaymentCreateWithoutPolicyInput, PaymentUncheckedCreateWithoutPolicyInput> | PaymentCreateWithoutPolicyInput[] | PaymentUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPolicyInput | PaymentCreateOrConnectWithoutPolicyInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPolicyInput | PaymentUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PaymentCreateManyPolicyInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPolicyInput | PaymentUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPolicyInput | PaymentUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PayoutUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PayoutCreateWithoutPolicyInput, PayoutUncheckedCreateWithoutPolicyInput> | PayoutCreateWithoutPolicyInput[] | PayoutUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutPolicyInput | PayoutCreateOrConnectWithoutPolicyInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutPolicyInput | PayoutUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PayoutCreateManyPolicyInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutPolicyInput | PayoutUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutPolicyInput | PayoutUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type OracleDataCreateNestedManyWithoutOracleSourceInput = {
    create?: XOR<OracleDataCreateWithoutOracleSourceInput, OracleDataUncheckedCreateWithoutOracleSourceInput> | OracleDataCreateWithoutOracleSourceInput[] | OracleDataUncheckedCreateWithoutOracleSourceInput[]
    connectOrCreate?: OracleDataCreateOrConnectWithoutOracleSourceInput | OracleDataCreateOrConnectWithoutOracleSourceInput[]
    createMany?: OracleDataCreateManyOracleSourceInputEnvelope
    connect?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
  }

  export type OracleDataUncheckedCreateNestedManyWithoutOracleSourceInput = {
    create?: XOR<OracleDataCreateWithoutOracleSourceInput, OracleDataUncheckedCreateWithoutOracleSourceInput> | OracleDataCreateWithoutOracleSourceInput[] | OracleDataUncheckedCreateWithoutOracleSourceInput[]
    connectOrCreate?: OracleDataCreateOrConnectWithoutOracleSourceInput | OracleDataCreateOrConnectWithoutOracleSourceInput[]
    createMany?: OracleDataCreateManyOracleSourceInputEnvelope
    connect?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
  }

  export type OracleDataUpdateManyWithoutOracleSourceNestedInput = {
    create?: XOR<OracleDataCreateWithoutOracleSourceInput, OracleDataUncheckedCreateWithoutOracleSourceInput> | OracleDataCreateWithoutOracleSourceInput[] | OracleDataUncheckedCreateWithoutOracleSourceInput[]
    connectOrCreate?: OracleDataCreateOrConnectWithoutOracleSourceInput | OracleDataCreateOrConnectWithoutOracleSourceInput[]
    upsert?: OracleDataUpsertWithWhereUniqueWithoutOracleSourceInput | OracleDataUpsertWithWhereUniqueWithoutOracleSourceInput[]
    createMany?: OracleDataCreateManyOracleSourceInputEnvelope
    set?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
    disconnect?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
    delete?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
    connect?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
    update?: OracleDataUpdateWithWhereUniqueWithoutOracleSourceInput | OracleDataUpdateWithWhereUniqueWithoutOracleSourceInput[]
    updateMany?: OracleDataUpdateManyWithWhereWithoutOracleSourceInput | OracleDataUpdateManyWithWhereWithoutOracleSourceInput[]
    deleteMany?: OracleDataScalarWhereInput | OracleDataScalarWhereInput[]
  }

  export type OracleDataUncheckedUpdateManyWithoutOracleSourceNestedInput = {
    create?: XOR<OracleDataCreateWithoutOracleSourceInput, OracleDataUncheckedCreateWithoutOracleSourceInput> | OracleDataCreateWithoutOracleSourceInput[] | OracleDataUncheckedCreateWithoutOracleSourceInput[]
    connectOrCreate?: OracleDataCreateOrConnectWithoutOracleSourceInput | OracleDataCreateOrConnectWithoutOracleSourceInput[]
    upsert?: OracleDataUpsertWithWhereUniqueWithoutOracleSourceInput | OracleDataUpsertWithWhereUniqueWithoutOracleSourceInput[]
    createMany?: OracleDataCreateManyOracleSourceInputEnvelope
    set?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
    disconnect?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
    delete?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
    connect?: OracleDataWhereUniqueInput | OracleDataWhereUniqueInput[]
    update?: OracleDataUpdateWithWhereUniqueWithoutOracleSourceInput | OracleDataUpdateWithWhereUniqueWithoutOracleSourceInput[]
    updateMany?: OracleDataUpdateManyWithWhereWithoutOracleSourceInput | OracleDataUpdateManyWithWhereWithoutOracleSourceInput[]
    deleteMany?: OracleDataScalarWhereInput | OracleDataScalarWhereInput[]
  }

  export type OracleSourceCreateNestedOneWithoutOracleDataInput = {
    create?: XOR<OracleSourceCreateWithoutOracleDataInput, OracleSourceUncheckedCreateWithoutOracleDataInput>
    connectOrCreate?: OracleSourceCreateOrConnectWithoutOracleDataInput
    connect?: OracleSourceWhereUniqueInput
  }

  export type PolicyTriggerCreateNestedManyWithoutOracleDataInput = {
    create?: XOR<PolicyTriggerCreateWithoutOracleDataInput, PolicyTriggerUncheckedCreateWithoutOracleDataInput> | PolicyTriggerCreateWithoutOracleDataInput[] | PolicyTriggerUncheckedCreateWithoutOracleDataInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutOracleDataInput | PolicyTriggerCreateOrConnectWithoutOracleDataInput[]
    createMany?: PolicyTriggerCreateManyOracleDataInputEnvelope
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
  }

  export type PolicyTriggerUncheckedCreateNestedManyWithoutOracleDataInput = {
    create?: XOR<PolicyTriggerCreateWithoutOracleDataInput, PolicyTriggerUncheckedCreateWithoutOracleDataInput> | PolicyTriggerCreateWithoutOracleDataInput[] | PolicyTriggerUncheckedCreateWithoutOracleDataInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutOracleDataInput | PolicyTriggerCreateOrConnectWithoutOracleDataInput[]
    createMany?: PolicyTriggerCreateManyOracleDataInputEnvelope
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
  }

  export type OracleSourceUpdateOneRequiredWithoutOracleDataNestedInput = {
    create?: XOR<OracleSourceCreateWithoutOracleDataInput, OracleSourceUncheckedCreateWithoutOracleDataInput>
    connectOrCreate?: OracleSourceCreateOrConnectWithoutOracleDataInput
    upsert?: OracleSourceUpsertWithoutOracleDataInput
    connect?: OracleSourceWhereUniqueInput
    update?: XOR<XOR<OracleSourceUpdateToOneWithWhereWithoutOracleDataInput, OracleSourceUpdateWithoutOracleDataInput>, OracleSourceUncheckedUpdateWithoutOracleDataInput>
  }

  export type PolicyTriggerUpdateManyWithoutOracleDataNestedInput = {
    create?: XOR<PolicyTriggerCreateWithoutOracleDataInput, PolicyTriggerUncheckedCreateWithoutOracleDataInput> | PolicyTriggerCreateWithoutOracleDataInput[] | PolicyTriggerUncheckedCreateWithoutOracleDataInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutOracleDataInput | PolicyTriggerCreateOrConnectWithoutOracleDataInput[]
    upsert?: PolicyTriggerUpsertWithWhereUniqueWithoutOracleDataInput | PolicyTriggerUpsertWithWhereUniqueWithoutOracleDataInput[]
    createMany?: PolicyTriggerCreateManyOracleDataInputEnvelope
    set?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    disconnect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    delete?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    update?: PolicyTriggerUpdateWithWhereUniqueWithoutOracleDataInput | PolicyTriggerUpdateWithWhereUniqueWithoutOracleDataInput[]
    updateMany?: PolicyTriggerUpdateManyWithWhereWithoutOracleDataInput | PolicyTriggerUpdateManyWithWhereWithoutOracleDataInput[]
    deleteMany?: PolicyTriggerScalarWhereInput | PolicyTriggerScalarWhereInput[]
  }

  export type PolicyTriggerUncheckedUpdateManyWithoutOracleDataNestedInput = {
    create?: XOR<PolicyTriggerCreateWithoutOracleDataInput, PolicyTriggerUncheckedCreateWithoutOracleDataInput> | PolicyTriggerCreateWithoutOracleDataInput[] | PolicyTriggerUncheckedCreateWithoutOracleDataInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutOracleDataInput | PolicyTriggerCreateOrConnectWithoutOracleDataInput[]
    upsert?: PolicyTriggerUpsertWithWhereUniqueWithoutOracleDataInput | PolicyTriggerUpsertWithWhereUniqueWithoutOracleDataInput[]
    createMany?: PolicyTriggerCreateManyOracleDataInputEnvelope
    set?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    disconnect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    delete?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    update?: PolicyTriggerUpdateWithWhereUniqueWithoutOracleDataInput | PolicyTriggerUpdateWithWhereUniqueWithoutOracleDataInput[]
    updateMany?: PolicyTriggerUpdateManyWithWhereWithoutOracleDataInput | PolicyTriggerUpdateManyWithWhereWithoutOracleDataInput[]
    deleteMany?: PolicyTriggerScalarWhereInput | PolicyTriggerScalarWhereInput[]
  }

  export type PolicyCreateNestedOneWithoutPolicyTriggersInput = {
    create?: XOR<PolicyCreateWithoutPolicyTriggersInput, PolicyUncheckedCreateWithoutPolicyTriggersInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutPolicyTriggersInput
    connect?: PolicyWhereUniqueInput
  }

  export type OracleDataCreateNestedOneWithoutPolicyTriggersInput = {
    create?: XOR<OracleDataCreateWithoutPolicyTriggersInput, OracleDataUncheckedCreateWithoutPolicyTriggersInput>
    connectOrCreate?: OracleDataCreateOrConnectWithoutPolicyTriggersInput
    connect?: OracleDataWhereUniqueInput
  }

  export type PayoutCreateNestedOneWithoutPolicyTriggersInput = {
    create?: XOR<PayoutCreateWithoutPolicyTriggersInput, PayoutUncheckedCreateWithoutPolicyTriggersInput>
    connectOrCreate?: PayoutCreateOrConnectWithoutPolicyTriggersInput
    connect?: PayoutWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PolicyUpdateOneRequiredWithoutPolicyTriggersNestedInput = {
    create?: XOR<PolicyCreateWithoutPolicyTriggersInput, PolicyUncheckedCreateWithoutPolicyTriggersInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutPolicyTriggersInput
    upsert?: PolicyUpsertWithoutPolicyTriggersInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutPolicyTriggersInput, PolicyUpdateWithoutPolicyTriggersInput>, PolicyUncheckedUpdateWithoutPolicyTriggersInput>
  }

  export type OracleDataUpdateOneRequiredWithoutPolicyTriggersNestedInput = {
    create?: XOR<OracleDataCreateWithoutPolicyTriggersInput, OracleDataUncheckedCreateWithoutPolicyTriggersInput>
    connectOrCreate?: OracleDataCreateOrConnectWithoutPolicyTriggersInput
    upsert?: OracleDataUpsertWithoutPolicyTriggersInput
    connect?: OracleDataWhereUniqueInput
    update?: XOR<XOR<OracleDataUpdateToOneWithWhereWithoutPolicyTriggersInput, OracleDataUpdateWithoutPolicyTriggersInput>, OracleDataUncheckedUpdateWithoutPolicyTriggersInput>
  }

  export type PayoutUpdateOneWithoutPolicyTriggersNestedInput = {
    create?: XOR<PayoutCreateWithoutPolicyTriggersInput, PayoutUncheckedCreateWithoutPolicyTriggersInput>
    connectOrCreate?: PayoutCreateOrConnectWithoutPolicyTriggersInput
    upsert?: PayoutUpsertWithoutPolicyTriggersInput
    disconnect?: PayoutWhereInput | boolean
    delete?: PayoutWhereInput | boolean
    connect?: PayoutWhereUniqueInput
    update?: XOR<XOR<PayoutUpdateToOneWithWhereWithoutPolicyTriggersInput, PayoutUpdateWithoutPolicyTriggersInput>, PayoutUncheckedUpdateWithoutPolicyTriggersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PolicyCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PolicyCreateWithoutPaymentsInput, PolicyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutPaymentsInput
    connect?: PolicyWhereUniqueInput
  }

  export type PolicyUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PolicyCreateWithoutPaymentsInput, PolicyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutPaymentsInput
    upsert?: PolicyUpsertWithoutPaymentsInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutPaymentsInput, PolicyUpdateWithoutPaymentsInput>, PolicyUncheckedUpdateWithoutPaymentsInput>
  }

  export type PolicyCreateNestedOneWithoutPayoutsInput = {
    create?: XOR<PolicyCreateWithoutPayoutsInput, PolicyUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutPayoutsInput
    connect?: PolicyWhereUniqueInput
  }

  export type RiskPoolCreateNestedOneWithoutPayoutsInput = {
    create?: XOR<RiskPoolCreateWithoutPayoutsInput, RiskPoolUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: RiskPoolCreateOrConnectWithoutPayoutsInput
    connect?: RiskPoolWhereUniqueInput
  }

  export type PolicyTriggerCreateNestedManyWithoutPayoutInput = {
    create?: XOR<PolicyTriggerCreateWithoutPayoutInput, PolicyTriggerUncheckedCreateWithoutPayoutInput> | PolicyTriggerCreateWithoutPayoutInput[] | PolicyTriggerUncheckedCreateWithoutPayoutInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutPayoutInput | PolicyTriggerCreateOrConnectWithoutPayoutInput[]
    createMany?: PolicyTriggerCreateManyPayoutInputEnvelope
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
  }

  export type PolicyTriggerUncheckedCreateNestedManyWithoutPayoutInput = {
    create?: XOR<PolicyTriggerCreateWithoutPayoutInput, PolicyTriggerUncheckedCreateWithoutPayoutInput> | PolicyTriggerCreateWithoutPayoutInput[] | PolicyTriggerUncheckedCreateWithoutPayoutInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutPayoutInput | PolicyTriggerCreateOrConnectWithoutPayoutInput[]
    createMany?: PolicyTriggerCreateManyPayoutInputEnvelope
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PolicyUpdateOneWithoutPayoutsNestedInput = {
    create?: XOR<PolicyCreateWithoutPayoutsInput, PolicyUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutPayoutsInput
    upsert?: PolicyUpsertWithoutPayoutsInput
    disconnect?: PolicyWhereInput | boolean
    delete?: PolicyWhereInput | boolean
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutPayoutsInput, PolicyUpdateWithoutPayoutsInput>, PolicyUncheckedUpdateWithoutPayoutsInput>
  }

  export type RiskPoolUpdateOneWithoutPayoutsNestedInput = {
    create?: XOR<RiskPoolCreateWithoutPayoutsInput, RiskPoolUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: RiskPoolCreateOrConnectWithoutPayoutsInput
    upsert?: RiskPoolUpsertWithoutPayoutsInput
    disconnect?: RiskPoolWhereInput | boolean
    delete?: RiskPoolWhereInput | boolean
    connect?: RiskPoolWhereUniqueInput
    update?: XOR<XOR<RiskPoolUpdateToOneWithWhereWithoutPayoutsInput, RiskPoolUpdateWithoutPayoutsInput>, RiskPoolUncheckedUpdateWithoutPayoutsInput>
  }

  export type PolicyTriggerUpdateManyWithoutPayoutNestedInput = {
    create?: XOR<PolicyTriggerCreateWithoutPayoutInput, PolicyTriggerUncheckedCreateWithoutPayoutInput> | PolicyTriggerCreateWithoutPayoutInput[] | PolicyTriggerUncheckedCreateWithoutPayoutInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutPayoutInput | PolicyTriggerCreateOrConnectWithoutPayoutInput[]
    upsert?: PolicyTriggerUpsertWithWhereUniqueWithoutPayoutInput | PolicyTriggerUpsertWithWhereUniqueWithoutPayoutInput[]
    createMany?: PolicyTriggerCreateManyPayoutInputEnvelope
    set?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    disconnect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    delete?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    update?: PolicyTriggerUpdateWithWhereUniqueWithoutPayoutInput | PolicyTriggerUpdateWithWhereUniqueWithoutPayoutInput[]
    updateMany?: PolicyTriggerUpdateManyWithWhereWithoutPayoutInput | PolicyTriggerUpdateManyWithWhereWithoutPayoutInput[]
    deleteMany?: PolicyTriggerScalarWhereInput | PolicyTriggerScalarWhereInput[]
  }

  export type PolicyTriggerUncheckedUpdateManyWithoutPayoutNestedInput = {
    create?: XOR<PolicyTriggerCreateWithoutPayoutInput, PolicyTriggerUncheckedCreateWithoutPayoutInput> | PolicyTriggerCreateWithoutPayoutInput[] | PolicyTriggerUncheckedCreateWithoutPayoutInput[]
    connectOrCreate?: PolicyTriggerCreateOrConnectWithoutPayoutInput | PolicyTriggerCreateOrConnectWithoutPayoutInput[]
    upsert?: PolicyTriggerUpsertWithWhereUniqueWithoutPayoutInput | PolicyTriggerUpsertWithWhereUniqueWithoutPayoutInput[]
    createMany?: PolicyTriggerCreateManyPayoutInputEnvelope
    set?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    disconnect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    delete?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    connect?: PolicyTriggerWhereUniqueInput | PolicyTriggerWhereUniqueInput[]
    update?: PolicyTriggerUpdateWithWhereUniqueWithoutPayoutInput | PolicyTriggerUpdateWithWhereUniqueWithoutPayoutInput[]
    updateMany?: PolicyTriggerUpdateManyWithWhereWithoutPayoutInput | PolicyTriggerUpdateManyWithWhereWithoutPayoutInput[]
    deleteMany?: PolicyTriggerScalarWhereInput | PolicyTriggerScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PolicyCreateWithoutUserInput = {
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    riskPool: RiskPoolCreateNestedOneWithoutPoliciesInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutPolicyInput
    payments?: PaymentCreateNestedManyWithoutPolicyInput
    payouts?: PayoutCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutUserInput = {
    id?: number
    riskPoolId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutPolicyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPolicyInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutUserInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput>
  }

  export type PolicyCreateManyUserInputEnvelope = {
    data: PolicyCreateManyUserInput | PolicyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CapitalProviderCreateWithoutUserInput = {
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
    riskPool: RiskPoolCreateNestedOneWithoutCapitalProvidersInput
  }

  export type CapitalProviderUncheckedCreateWithoutUserInput = {
    id?: number
    riskPoolId: number
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
  }

  export type CapitalProviderCreateOrConnectWithoutUserInput = {
    where: CapitalProviderWhereUniqueInput
    create: XOR<CapitalProviderCreateWithoutUserInput, CapitalProviderUncheckedCreateWithoutUserInput>
  }

  export type CapitalProviderCreateManyUserInputEnvelope = {
    data: CapitalProviderCreateManyUserInput | CapitalProviderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PolicyUpsertWithWhereUniqueWithoutUserInput = {
    where: PolicyWhereUniqueInput
    update: XOR<PolicyUpdateWithoutUserInput, PolicyUncheckedUpdateWithoutUserInput>
    create: XOR<PolicyCreateWithoutUserInput, PolicyUncheckedCreateWithoutUserInput>
  }

  export type PolicyUpdateWithWhereUniqueWithoutUserInput = {
    where: PolicyWhereUniqueInput
    data: XOR<PolicyUpdateWithoutUserInput, PolicyUncheckedUpdateWithoutUserInput>
  }

  export type PolicyUpdateManyWithWhereWithoutUserInput = {
    where: PolicyScalarWhereInput
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyWithoutUserInput>
  }

  export type PolicyScalarWhereInput = {
    AND?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    OR?: PolicyScalarWhereInput[]
    NOT?: PolicyScalarWhereInput | PolicyScalarWhereInput[]
    id?: IntFilter<"Policy"> | number
    userId?: IntFilter<"Policy"> | number
    riskPoolId?: IntFilter<"Policy"> | number
    coverageAmount?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFilter<"Policy"> | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFilter<"Policy"> | Date | string
    coverageEnd?: DateTimeFilter<"Policy"> | Date | string
    status?: StringFilter<"Policy"> | string
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
  }

  export type CapitalProviderUpsertWithWhereUniqueWithoutUserInput = {
    where: CapitalProviderWhereUniqueInput
    update: XOR<CapitalProviderUpdateWithoutUserInput, CapitalProviderUncheckedUpdateWithoutUserInput>
    create: XOR<CapitalProviderCreateWithoutUserInput, CapitalProviderUncheckedCreateWithoutUserInput>
  }

  export type CapitalProviderUpdateWithWhereUniqueWithoutUserInput = {
    where: CapitalProviderWhereUniqueInput
    data: XOR<CapitalProviderUpdateWithoutUserInput, CapitalProviderUncheckedUpdateWithoutUserInput>
  }

  export type CapitalProviderUpdateManyWithWhereWithoutUserInput = {
    where: CapitalProviderScalarWhereInput
    data: XOR<CapitalProviderUpdateManyMutationInput, CapitalProviderUncheckedUpdateManyWithoutUserInput>
  }

  export type CapitalProviderScalarWhereInput = {
    AND?: CapitalProviderScalarWhereInput | CapitalProviderScalarWhereInput[]
    OR?: CapitalProviderScalarWhereInput[]
    NOT?: CapitalProviderScalarWhereInput | CapitalProviderScalarWhereInput[]
    id?: IntFilter<"CapitalProvider"> | number
    userId?: IntFilter<"CapitalProvider"> | number
    riskPoolId?: IntFilter<"CapitalProvider"> | number
    stakeAmount?: DecimalFilter<"CapitalProvider"> | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFilter<"CapitalProvider"> | Date | string
    createdAt?: DateTimeFilter<"CapitalProvider"> | Date | string
  }

  export type RiskPoolCreateWithoutCommunityInput = {
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutRiskPoolsInput
    policies?: PolicyCreateNestedManyWithoutRiskPoolInput
    capitalProviders?: CapitalProviderCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolUncheckedCreateWithoutCommunityInput = {
    id?: number
    eventTypeId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutRiskPoolInput
    capitalProviders?: CapitalProviderUncheckedCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolCreateOrConnectWithoutCommunityInput = {
    where: RiskPoolWhereUniqueInput
    create: XOR<RiskPoolCreateWithoutCommunityInput, RiskPoolUncheckedCreateWithoutCommunityInput>
  }

  export type RiskPoolCreateManyCommunityInputEnvelope = {
    data: RiskPoolCreateManyCommunityInput | RiskPoolCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type RiskPoolUpsertWithWhereUniqueWithoutCommunityInput = {
    where: RiskPoolWhereUniqueInput
    update: XOR<RiskPoolUpdateWithoutCommunityInput, RiskPoolUncheckedUpdateWithoutCommunityInput>
    create: XOR<RiskPoolCreateWithoutCommunityInput, RiskPoolUncheckedCreateWithoutCommunityInput>
  }

  export type RiskPoolUpdateWithWhereUniqueWithoutCommunityInput = {
    where: RiskPoolWhereUniqueInput
    data: XOR<RiskPoolUpdateWithoutCommunityInput, RiskPoolUncheckedUpdateWithoutCommunityInput>
  }

  export type RiskPoolUpdateManyWithWhereWithoutCommunityInput = {
    where: RiskPoolScalarWhereInput
    data: XOR<RiskPoolUpdateManyMutationInput, RiskPoolUncheckedUpdateManyWithoutCommunityInput>
  }

  export type RiskPoolScalarWhereInput = {
    AND?: RiskPoolScalarWhereInput | RiskPoolScalarWhereInput[]
    OR?: RiskPoolScalarWhereInput[]
    NOT?: RiskPoolScalarWhereInput | RiskPoolScalarWhereInput[]
    id?: IntFilter<"RiskPool"> | number
    communityId?: IntFilter<"RiskPool"> | number
    eventTypeId?: IntFilter<"RiskPool"> | number
    totalCapital?: DecimalFilter<"RiskPool"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RiskPool"> | Date | string
  }

  export type RiskPoolCreateWithoutEventTypeInput = {
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    community: CommunityCreateNestedOneWithoutRiskPoolsInput
    policies?: PolicyCreateNestedManyWithoutRiskPoolInput
    capitalProviders?: CapitalProviderCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolUncheckedCreateWithoutEventTypeInput = {
    id?: number
    communityId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutRiskPoolInput
    capitalProviders?: CapitalProviderUncheckedCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolCreateOrConnectWithoutEventTypeInput = {
    where: RiskPoolWhereUniqueInput
    create: XOR<RiskPoolCreateWithoutEventTypeInput, RiskPoolUncheckedCreateWithoutEventTypeInput>
  }

  export type RiskPoolCreateManyEventTypeInputEnvelope = {
    data: RiskPoolCreateManyEventTypeInput | RiskPoolCreateManyEventTypeInput[]
    skipDuplicates?: boolean
  }

  export type RiskPoolUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: RiskPoolWhereUniqueInput
    update: XOR<RiskPoolUpdateWithoutEventTypeInput, RiskPoolUncheckedUpdateWithoutEventTypeInput>
    create: XOR<RiskPoolCreateWithoutEventTypeInput, RiskPoolUncheckedCreateWithoutEventTypeInput>
  }

  export type RiskPoolUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: RiskPoolWhereUniqueInput
    data: XOR<RiskPoolUpdateWithoutEventTypeInput, RiskPoolUncheckedUpdateWithoutEventTypeInput>
  }

  export type RiskPoolUpdateManyWithWhereWithoutEventTypeInput = {
    where: RiskPoolScalarWhereInput
    data: XOR<RiskPoolUpdateManyMutationInput, RiskPoolUncheckedUpdateManyWithoutEventTypeInput>
  }

  export type CommunityCreateWithoutRiskPoolsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityUncheckedCreateWithoutRiskPoolsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityCreateOrConnectWithoutRiskPoolsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutRiskPoolsInput, CommunityUncheckedCreateWithoutRiskPoolsInput>
  }

  export type EventTypeCreateWithoutRiskPoolsInput = {
    name: string
    description?: string | null
  }

  export type EventTypeUncheckedCreateWithoutRiskPoolsInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type EventTypeCreateOrConnectWithoutRiskPoolsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutRiskPoolsInput, EventTypeUncheckedCreateWithoutRiskPoolsInput>
  }

  export type PolicyCreateWithoutRiskPoolInput = {
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPoliciesInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutPolicyInput
    payments?: PaymentCreateNestedManyWithoutPolicyInput
    payouts?: PayoutCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutRiskPoolInput = {
    id?: number
    userId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutPolicyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPolicyInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutRiskPoolInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutRiskPoolInput, PolicyUncheckedCreateWithoutRiskPoolInput>
  }

  export type PolicyCreateManyRiskPoolInputEnvelope = {
    data: PolicyCreateManyRiskPoolInput | PolicyCreateManyRiskPoolInput[]
    skipDuplicates?: boolean
  }

  export type CapitalProviderCreateWithoutRiskPoolInput = {
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCapitalProvidersInput
  }

  export type CapitalProviderUncheckedCreateWithoutRiskPoolInput = {
    id?: number
    userId: number
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
  }

  export type CapitalProviderCreateOrConnectWithoutRiskPoolInput = {
    where: CapitalProviderWhereUniqueInput
    create: XOR<CapitalProviderCreateWithoutRiskPoolInput, CapitalProviderUncheckedCreateWithoutRiskPoolInput>
  }

  export type CapitalProviderCreateManyRiskPoolInputEnvelope = {
    data: CapitalProviderCreateManyRiskPoolInput | CapitalProviderCreateManyRiskPoolInput[]
    skipDuplicates?: boolean
  }

  export type PayoutCreateWithoutRiskPoolInput = {
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    policy?: PolicyCreateNestedOneWithoutPayoutsInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutPayoutInput
  }

  export type PayoutUncheckedCreateWithoutRiskPoolInput = {
    id?: number
    policyId?: number | null
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutPayoutInput
  }

  export type PayoutCreateOrConnectWithoutRiskPoolInput = {
    where: PayoutWhereUniqueInput
    create: XOR<PayoutCreateWithoutRiskPoolInput, PayoutUncheckedCreateWithoutRiskPoolInput>
  }

  export type PayoutCreateManyRiskPoolInputEnvelope = {
    data: PayoutCreateManyRiskPoolInput | PayoutCreateManyRiskPoolInput[]
    skipDuplicates?: boolean
  }

  export type CommunityUpsertWithoutRiskPoolsInput = {
    update: XOR<CommunityUpdateWithoutRiskPoolsInput, CommunityUncheckedUpdateWithoutRiskPoolsInput>
    create: XOR<CommunityCreateWithoutRiskPoolsInput, CommunityUncheckedCreateWithoutRiskPoolsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutRiskPoolsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutRiskPoolsInput, CommunityUncheckedUpdateWithoutRiskPoolsInput>
  }

  export type CommunityUpdateWithoutRiskPoolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateWithoutRiskPoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeUpsertWithoutRiskPoolsInput = {
    update: XOR<EventTypeUpdateWithoutRiskPoolsInput, EventTypeUncheckedUpdateWithoutRiskPoolsInput>
    create: XOR<EventTypeCreateWithoutRiskPoolsInput, EventTypeUncheckedCreateWithoutRiskPoolsInput>
    where?: EventTypeWhereInput
  }

  export type EventTypeUpdateToOneWithWhereWithoutRiskPoolsInput = {
    where?: EventTypeWhereInput
    data: XOR<EventTypeUpdateWithoutRiskPoolsInput, EventTypeUncheckedUpdateWithoutRiskPoolsInput>
  }

  export type EventTypeUpdateWithoutRiskPoolsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTypeUncheckedUpdateWithoutRiskPoolsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyUpsertWithWhereUniqueWithoutRiskPoolInput = {
    where: PolicyWhereUniqueInput
    update: XOR<PolicyUpdateWithoutRiskPoolInput, PolicyUncheckedUpdateWithoutRiskPoolInput>
    create: XOR<PolicyCreateWithoutRiskPoolInput, PolicyUncheckedCreateWithoutRiskPoolInput>
  }

  export type PolicyUpdateWithWhereUniqueWithoutRiskPoolInput = {
    where: PolicyWhereUniqueInput
    data: XOR<PolicyUpdateWithoutRiskPoolInput, PolicyUncheckedUpdateWithoutRiskPoolInput>
  }

  export type PolicyUpdateManyWithWhereWithoutRiskPoolInput = {
    where: PolicyScalarWhereInput
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyWithoutRiskPoolInput>
  }

  export type CapitalProviderUpsertWithWhereUniqueWithoutRiskPoolInput = {
    where: CapitalProviderWhereUniqueInput
    update: XOR<CapitalProviderUpdateWithoutRiskPoolInput, CapitalProviderUncheckedUpdateWithoutRiskPoolInput>
    create: XOR<CapitalProviderCreateWithoutRiskPoolInput, CapitalProviderUncheckedCreateWithoutRiskPoolInput>
  }

  export type CapitalProviderUpdateWithWhereUniqueWithoutRiskPoolInput = {
    where: CapitalProviderWhereUniqueInput
    data: XOR<CapitalProviderUpdateWithoutRiskPoolInput, CapitalProviderUncheckedUpdateWithoutRiskPoolInput>
  }

  export type CapitalProviderUpdateManyWithWhereWithoutRiskPoolInput = {
    where: CapitalProviderScalarWhereInput
    data: XOR<CapitalProviderUpdateManyMutationInput, CapitalProviderUncheckedUpdateManyWithoutRiskPoolInput>
  }

  export type PayoutUpsertWithWhereUniqueWithoutRiskPoolInput = {
    where: PayoutWhereUniqueInput
    update: XOR<PayoutUpdateWithoutRiskPoolInput, PayoutUncheckedUpdateWithoutRiskPoolInput>
    create: XOR<PayoutCreateWithoutRiskPoolInput, PayoutUncheckedCreateWithoutRiskPoolInput>
  }

  export type PayoutUpdateWithWhereUniqueWithoutRiskPoolInput = {
    where: PayoutWhereUniqueInput
    data: XOR<PayoutUpdateWithoutRiskPoolInput, PayoutUncheckedUpdateWithoutRiskPoolInput>
  }

  export type PayoutUpdateManyWithWhereWithoutRiskPoolInput = {
    where: PayoutScalarWhereInput
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyWithoutRiskPoolInput>
  }

  export type PayoutScalarWhereInput = {
    AND?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
    OR?: PayoutScalarWhereInput[]
    NOT?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
    id?: IntFilter<"Payout"> | number
    policyId?: IntNullableFilter<"Payout"> | number | null
    riskPoolId?: IntNullableFilter<"Payout"> | number | null
    payoutAmount?: DecimalFilter<"Payout"> | Decimal | DecimalJsLike | number | string
    payoutTxHash?: StringNullableFilter<"Payout"> | string | null
    paidAt?: DateTimeNullableFilter<"Payout"> | Date | string | null
    createdAt?: DateTimeFilter<"Payout"> | Date | string
  }

  export type UserCreateWithoutCapitalProvidersInput = {
    email: string
    password: string
    fullName?: string | null
    phoneNumber?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCapitalProvidersInput = {
    id?: number
    email: string
    password: string
    fullName?: string | null
    phoneNumber?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCapitalProvidersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCapitalProvidersInput, UserUncheckedCreateWithoutCapitalProvidersInput>
  }

  export type RiskPoolCreateWithoutCapitalProvidersInput = {
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    community: CommunityCreateNestedOneWithoutRiskPoolsInput
    eventType: EventTypeCreateNestedOneWithoutRiskPoolsInput
    policies?: PolicyCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolUncheckedCreateWithoutCapitalProvidersInput = {
    id?: number
    communityId: number
    eventTypeId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolCreateOrConnectWithoutCapitalProvidersInput = {
    where: RiskPoolWhereUniqueInput
    create: XOR<RiskPoolCreateWithoutCapitalProvidersInput, RiskPoolUncheckedCreateWithoutCapitalProvidersInput>
  }

  export type UserUpsertWithoutCapitalProvidersInput = {
    update: XOR<UserUpdateWithoutCapitalProvidersInput, UserUncheckedUpdateWithoutCapitalProvidersInput>
    create: XOR<UserCreateWithoutCapitalProvidersInput, UserUncheckedCreateWithoutCapitalProvidersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCapitalProvidersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCapitalProvidersInput, UserUncheckedUpdateWithoutCapitalProvidersInput>
  }

  export type UserUpdateWithoutCapitalProvidersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCapitalProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RiskPoolUpsertWithoutCapitalProvidersInput = {
    update: XOR<RiskPoolUpdateWithoutCapitalProvidersInput, RiskPoolUncheckedUpdateWithoutCapitalProvidersInput>
    create: XOR<RiskPoolCreateWithoutCapitalProvidersInput, RiskPoolUncheckedCreateWithoutCapitalProvidersInput>
    where?: RiskPoolWhereInput
  }

  export type RiskPoolUpdateToOneWithWhereWithoutCapitalProvidersInput = {
    where?: RiskPoolWhereInput
    data: XOR<RiskPoolUpdateWithoutCapitalProvidersInput, RiskPoolUncheckedUpdateWithoutCapitalProvidersInput>
  }

  export type RiskPoolUpdateWithoutCapitalProvidersInput = {
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutRiskPoolsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutRiskPoolsNestedInput
    policies?: PolicyUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolUncheckedUpdateWithoutCapitalProvidersInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutRiskPoolNestedInput
  }

  export type UserCreateWithoutPoliciesInput = {
    email: string
    password: string
    fullName?: string | null
    phoneNumber?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    capitalProviders?: CapitalProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPoliciesInput = {
    id?: number
    email: string
    password: string
    fullName?: string | null
    phoneNumber?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    capitalProviders?: CapitalProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPoliciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPoliciesInput, UserUncheckedCreateWithoutPoliciesInput>
  }

  export type RiskPoolCreateWithoutPoliciesInput = {
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    community: CommunityCreateNestedOneWithoutRiskPoolsInput
    eventType: EventTypeCreateNestedOneWithoutRiskPoolsInput
    capitalProviders?: CapitalProviderCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolUncheckedCreateWithoutPoliciesInput = {
    id?: number
    communityId: number
    eventTypeId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    capitalProviders?: CapitalProviderUncheckedCreateNestedManyWithoutRiskPoolInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolCreateOrConnectWithoutPoliciesInput = {
    where: RiskPoolWhereUniqueInput
    create: XOR<RiskPoolCreateWithoutPoliciesInput, RiskPoolUncheckedCreateWithoutPoliciesInput>
  }

  export type PolicyTriggerCreateWithoutPolicyInput = {
    triggered?: boolean
    triggerCheckedAt?: Date | string
    oracleData: OracleDataCreateNestedOneWithoutPolicyTriggersInput
    payout?: PayoutCreateNestedOneWithoutPolicyTriggersInput
  }

  export type PolicyTriggerUncheckedCreateWithoutPolicyInput = {
    id?: number
    oracleDataId: number
    triggered?: boolean
    triggerCheckedAt?: Date | string
    payoutId?: number | null
  }

  export type PolicyTriggerCreateOrConnectWithoutPolicyInput = {
    where: PolicyTriggerWhereUniqueInput
    create: XOR<PolicyTriggerCreateWithoutPolicyInput, PolicyTriggerUncheckedCreateWithoutPolicyInput>
  }

  export type PolicyTriggerCreateManyPolicyInputEnvelope = {
    data: PolicyTriggerCreateManyPolicyInput | PolicyTriggerCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutPolicyInput = {
    amount: Decimal | DecimalJsLike | number | string
    paymentTxHash?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutPolicyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    paymentTxHash?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPolicyInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPolicyInput, PaymentUncheckedCreateWithoutPolicyInput>
  }

  export type PaymentCreateManyPolicyInputEnvelope = {
    data: PaymentCreateManyPolicyInput | PaymentCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type PayoutCreateWithoutPolicyInput = {
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    riskPool?: RiskPoolCreateNestedOneWithoutPayoutsInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutPayoutInput
  }

  export type PayoutUncheckedCreateWithoutPolicyInput = {
    id?: number
    riskPoolId?: number | null
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutPayoutInput
  }

  export type PayoutCreateOrConnectWithoutPolicyInput = {
    where: PayoutWhereUniqueInput
    create: XOR<PayoutCreateWithoutPolicyInput, PayoutUncheckedCreateWithoutPolicyInput>
  }

  export type PayoutCreateManyPolicyInputEnvelope = {
    data: PayoutCreateManyPolicyInput | PayoutCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPoliciesInput = {
    update: XOR<UserUpdateWithoutPoliciesInput, UserUncheckedUpdateWithoutPoliciesInput>
    create: XOR<UserCreateWithoutPoliciesInput, UserUncheckedCreateWithoutPoliciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPoliciesInput, UserUncheckedUpdateWithoutPoliciesInput>
  }

  export type UserUpdateWithoutPoliciesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capitalProviders?: CapitalProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPoliciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capitalProviders?: CapitalProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RiskPoolUpsertWithoutPoliciesInput = {
    update: XOR<RiskPoolUpdateWithoutPoliciesInput, RiskPoolUncheckedUpdateWithoutPoliciesInput>
    create: XOR<RiskPoolCreateWithoutPoliciesInput, RiskPoolUncheckedCreateWithoutPoliciesInput>
    where?: RiskPoolWhereInput
  }

  export type RiskPoolUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: RiskPoolWhereInput
    data: XOR<RiskPoolUpdateWithoutPoliciesInput, RiskPoolUncheckedUpdateWithoutPoliciesInput>
  }

  export type RiskPoolUpdateWithoutPoliciesInput = {
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutRiskPoolsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutRiskPoolsNestedInput
    capitalProviders?: CapitalProviderUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolUncheckedUpdateWithoutPoliciesInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capitalProviders?: CapitalProviderUncheckedUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutRiskPoolNestedInput
  }

  export type PolicyTriggerUpsertWithWhereUniqueWithoutPolicyInput = {
    where: PolicyTriggerWhereUniqueInput
    update: XOR<PolicyTriggerUpdateWithoutPolicyInput, PolicyTriggerUncheckedUpdateWithoutPolicyInput>
    create: XOR<PolicyTriggerCreateWithoutPolicyInput, PolicyTriggerUncheckedCreateWithoutPolicyInput>
  }

  export type PolicyTriggerUpdateWithWhereUniqueWithoutPolicyInput = {
    where: PolicyTriggerWhereUniqueInput
    data: XOR<PolicyTriggerUpdateWithoutPolicyInput, PolicyTriggerUncheckedUpdateWithoutPolicyInput>
  }

  export type PolicyTriggerUpdateManyWithWhereWithoutPolicyInput = {
    where: PolicyTriggerScalarWhereInput
    data: XOR<PolicyTriggerUpdateManyMutationInput, PolicyTriggerUncheckedUpdateManyWithoutPolicyInput>
  }

  export type PolicyTriggerScalarWhereInput = {
    AND?: PolicyTriggerScalarWhereInput | PolicyTriggerScalarWhereInput[]
    OR?: PolicyTriggerScalarWhereInput[]
    NOT?: PolicyTriggerScalarWhereInput | PolicyTriggerScalarWhereInput[]
    id?: IntFilter<"PolicyTrigger"> | number
    policyId?: IntFilter<"PolicyTrigger"> | number
    oracleDataId?: IntFilter<"PolicyTrigger"> | number
    triggered?: BoolFilter<"PolicyTrigger"> | boolean
    triggerCheckedAt?: DateTimeFilter<"PolicyTrigger"> | Date | string
    payoutId?: IntNullableFilter<"PolicyTrigger"> | number | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutPolicyInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPolicyInput, PaymentUncheckedUpdateWithoutPolicyInput>
    create: XOR<PaymentCreateWithoutPolicyInput, PaymentUncheckedCreateWithoutPolicyInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPolicyInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPolicyInput, PaymentUncheckedUpdateWithoutPolicyInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPolicyInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPolicyInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    policyId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentTxHash?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PayoutUpsertWithWhereUniqueWithoutPolicyInput = {
    where: PayoutWhereUniqueInput
    update: XOR<PayoutUpdateWithoutPolicyInput, PayoutUncheckedUpdateWithoutPolicyInput>
    create: XOR<PayoutCreateWithoutPolicyInput, PayoutUncheckedCreateWithoutPolicyInput>
  }

  export type PayoutUpdateWithWhereUniqueWithoutPolicyInput = {
    where: PayoutWhereUniqueInput
    data: XOR<PayoutUpdateWithoutPolicyInput, PayoutUncheckedUpdateWithoutPolicyInput>
  }

  export type PayoutUpdateManyWithWhereWithoutPolicyInput = {
    where: PayoutScalarWhereInput
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyWithoutPolicyInput>
  }

  export type OracleDataCreateWithoutOracleSourceInput = {
    timestamp: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutOracleDataInput
  }

  export type OracleDataUncheckedCreateWithoutOracleSourceInput = {
    id?: number
    timestamp: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutOracleDataInput
  }

  export type OracleDataCreateOrConnectWithoutOracleSourceInput = {
    where: OracleDataWhereUniqueInput
    create: XOR<OracleDataCreateWithoutOracleSourceInput, OracleDataUncheckedCreateWithoutOracleSourceInput>
  }

  export type OracleDataCreateManyOracleSourceInputEnvelope = {
    data: OracleDataCreateManyOracleSourceInput | OracleDataCreateManyOracleSourceInput[]
    skipDuplicates?: boolean
  }

  export type OracleDataUpsertWithWhereUniqueWithoutOracleSourceInput = {
    where: OracleDataWhereUniqueInput
    update: XOR<OracleDataUpdateWithoutOracleSourceInput, OracleDataUncheckedUpdateWithoutOracleSourceInput>
    create: XOR<OracleDataCreateWithoutOracleSourceInput, OracleDataUncheckedCreateWithoutOracleSourceInput>
  }

  export type OracleDataUpdateWithWhereUniqueWithoutOracleSourceInput = {
    where: OracleDataWhereUniqueInput
    data: XOR<OracleDataUpdateWithoutOracleSourceInput, OracleDataUncheckedUpdateWithoutOracleSourceInput>
  }

  export type OracleDataUpdateManyWithWhereWithoutOracleSourceInput = {
    where: OracleDataScalarWhereInput
    data: XOR<OracleDataUpdateManyMutationInput, OracleDataUncheckedUpdateManyWithoutOracleSourceInput>
  }

  export type OracleDataScalarWhereInput = {
    AND?: OracleDataScalarWhereInput | OracleDataScalarWhereInput[]
    OR?: OracleDataScalarWhereInput[]
    NOT?: OracleDataScalarWhereInput | OracleDataScalarWhereInput[]
    id?: IntFilter<"OracleData"> | number
    oracleSourceId?: IntFilter<"OracleData"> | number
    timestamp?: DateTimeFilter<"OracleData"> | Date | string
    data?: JsonFilter<"OracleData">
    createdAt?: DateTimeFilter<"OracleData"> | Date | string
  }

  export type OracleSourceCreateWithoutOracleDataInput = {
    name: string
    sourceType?: string | null
    endpoint?: string | null
    createdAt?: Date | string
  }

  export type OracleSourceUncheckedCreateWithoutOracleDataInput = {
    id?: number
    name: string
    sourceType?: string | null
    endpoint?: string | null
    createdAt?: Date | string
  }

  export type OracleSourceCreateOrConnectWithoutOracleDataInput = {
    where: OracleSourceWhereUniqueInput
    create: XOR<OracleSourceCreateWithoutOracleDataInput, OracleSourceUncheckedCreateWithoutOracleDataInput>
  }

  export type PolicyTriggerCreateWithoutOracleDataInput = {
    triggered?: boolean
    triggerCheckedAt?: Date | string
    policy: PolicyCreateNestedOneWithoutPolicyTriggersInput
    payout?: PayoutCreateNestedOneWithoutPolicyTriggersInput
  }

  export type PolicyTriggerUncheckedCreateWithoutOracleDataInput = {
    id?: number
    policyId: number
    triggered?: boolean
    triggerCheckedAt?: Date | string
    payoutId?: number | null
  }

  export type PolicyTriggerCreateOrConnectWithoutOracleDataInput = {
    where: PolicyTriggerWhereUniqueInput
    create: XOR<PolicyTriggerCreateWithoutOracleDataInput, PolicyTriggerUncheckedCreateWithoutOracleDataInput>
  }

  export type PolicyTriggerCreateManyOracleDataInputEnvelope = {
    data: PolicyTriggerCreateManyOracleDataInput | PolicyTriggerCreateManyOracleDataInput[]
    skipDuplicates?: boolean
  }

  export type OracleSourceUpsertWithoutOracleDataInput = {
    update: XOR<OracleSourceUpdateWithoutOracleDataInput, OracleSourceUncheckedUpdateWithoutOracleDataInput>
    create: XOR<OracleSourceCreateWithoutOracleDataInput, OracleSourceUncheckedCreateWithoutOracleDataInput>
    where?: OracleSourceWhereInput
  }

  export type OracleSourceUpdateToOneWithWhereWithoutOracleDataInput = {
    where?: OracleSourceWhereInput
    data: XOR<OracleSourceUpdateWithoutOracleDataInput, OracleSourceUncheckedUpdateWithoutOracleDataInput>
  }

  export type OracleSourceUpdateWithoutOracleDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OracleSourceUncheckedUpdateWithoutOracleDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sourceType?: NullableStringFieldUpdateOperationsInput | string | null
    endpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTriggerUpsertWithWhereUniqueWithoutOracleDataInput = {
    where: PolicyTriggerWhereUniqueInput
    update: XOR<PolicyTriggerUpdateWithoutOracleDataInput, PolicyTriggerUncheckedUpdateWithoutOracleDataInput>
    create: XOR<PolicyTriggerCreateWithoutOracleDataInput, PolicyTriggerUncheckedCreateWithoutOracleDataInput>
  }

  export type PolicyTriggerUpdateWithWhereUniqueWithoutOracleDataInput = {
    where: PolicyTriggerWhereUniqueInput
    data: XOR<PolicyTriggerUpdateWithoutOracleDataInput, PolicyTriggerUncheckedUpdateWithoutOracleDataInput>
  }

  export type PolicyTriggerUpdateManyWithWhereWithoutOracleDataInput = {
    where: PolicyTriggerScalarWhereInput
    data: XOR<PolicyTriggerUpdateManyMutationInput, PolicyTriggerUncheckedUpdateManyWithoutOracleDataInput>
  }

  export type PolicyCreateWithoutPolicyTriggersInput = {
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPoliciesInput
    riskPool: RiskPoolCreateNestedOneWithoutPoliciesInput
    payments?: PaymentCreateNestedManyWithoutPolicyInput
    payouts?: PayoutCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutPolicyTriggersInput = {
    id?: number
    userId: number
    riskPoolId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPolicyInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutPolicyTriggersInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutPolicyTriggersInput, PolicyUncheckedCreateWithoutPolicyTriggersInput>
  }

  export type OracleDataCreateWithoutPolicyTriggersInput = {
    timestamp: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    oracleSource: OracleSourceCreateNestedOneWithoutOracleDataInput
  }

  export type OracleDataUncheckedCreateWithoutPolicyTriggersInput = {
    id?: number
    oracleSourceId: number
    timestamp: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OracleDataCreateOrConnectWithoutPolicyTriggersInput = {
    where: OracleDataWhereUniqueInput
    create: XOR<OracleDataCreateWithoutPolicyTriggersInput, OracleDataUncheckedCreateWithoutPolicyTriggersInput>
  }

  export type PayoutCreateWithoutPolicyTriggersInput = {
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    policy?: PolicyCreateNestedOneWithoutPayoutsInput
    riskPool?: RiskPoolCreateNestedOneWithoutPayoutsInput
  }

  export type PayoutUncheckedCreateWithoutPolicyTriggersInput = {
    id?: number
    policyId?: number | null
    riskPoolId?: number | null
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PayoutCreateOrConnectWithoutPolicyTriggersInput = {
    where: PayoutWhereUniqueInput
    create: XOR<PayoutCreateWithoutPolicyTriggersInput, PayoutUncheckedCreateWithoutPolicyTriggersInput>
  }

  export type PolicyUpsertWithoutPolicyTriggersInput = {
    update: XOR<PolicyUpdateWithoutPolicyTriggersInput, PolicyUncheckedUpdateWithoutPolicyTriggersInput>
    create: XOR<PolicyCreateWithoutPolicyTriggersInput, PolicyUncheckedCreateWithoutPolicyTriggersInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutPolicyTriggersInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutPolicyTriggersInput, PolicyUncheckedUpdateWithoutPolicyTriggersInput>
  }

  export type PolicyUpdateWithoutPolicyTriggersInput = {
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoliciesNestedInput
    riskPool?: RiskPoolUpdateOneRequiredWithoutPoliciesNestedInput
    payments?: PaymentUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutPolicyTriggersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type OracleDataUpsertWithoutPolicyTriggersInput = {
    update: XOR<OracleDataUpdateWithoutPolicyTriggersInput, OracleDataUncheckedUpdateWithoutPolicyTriggersInput>
    create: XOR<OracleDataCreateWithoutPolicyTriggersInput, OracleDataUncheckedCreateWithoutPolicyTriggersInput>
    where?: OracleDataWhereInput
  }

  export type OracleDataUpdateToOneWithWhereWithoutPolicyTriggersInput = {
    where?: OracleDataWhereInput
    data: XOR<OracleDataUpdateWithoutPolicyTriggersInput, OracleDataUncheckedUpdateWithoutPolicyTriggersInput>
  }

  export type OracleDataUpdateWithoutPolicyTriggersInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oracleSource?: OracleSourceUpdateOneRequiredWithoutOracleDataNestedInput
  }

  export type OracleDataUncheckedUpdateWithoutPolicyTriggersInput = {
    id?: IntFieldUpdateOperationsInput | number
    oracleSourceId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUpsertWithoutPolicyTriggersInput = {
    update: XOR<PayoutUpdateWithoutPolicyTriggersInput, PayoutUncheckedUpdateWithoutPolicyTriggersInput>
    create: XOR<PayoutCreateWithoutPolicyTriggersInput, PayoutUncheckedCreateWithoutPolicyTriggersInput>
    where?: PayoutWhereInput
  }

  export type PayoutUpdateToOneWithWhereWithoutPolicyTriggersInput = {
    where?: PayoutWhereInput
    data: XOR<PayoutUpdateWithoutPolicyTriggersInput, PayoutUncheckedUpdateWithoutPolicyTriggersInput>
  }

  export type PayoutUpdateWithoutPolicyTriggersInput = {
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneWithoutPayoutsNestedInput
    riskPool?: RiskPoolUpdateOneWithoutPayoutsNestedInput
  }

  export type PayoutUncheckedUpdateWithoutPolicyTriggersInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
    riskPoolId?: NullableIntFieldUpdateOperationsInput | number | null
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateWithoutPaymentsInput = {
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPoliciesInput
    riskPool: RiskPoolCreateNestedOneWithoutPoliciesInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutPolicyInput
    payouts?: PayoutCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutPaymentsInput = {
    id?: number
    userId: number
    riskPoolId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutPolicyInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutPaymentsInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutPaymentsInput, PolicyUncheckedCreateWithoutPaymentsInput>
  }

  export type PolicyUpsertWithoutPaymentsInput = {
    update: XOR<PolicyUpdateWithoutPaymentsInput, PolicyUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PolicyCreateWithoutPaymentsInput, PolicyUncheckedCreateWithoutPaymentsInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutPaymentsInput, PolicyUncheckedUpdateWithoutPaymentsInput>
  }

  export type PolicyUpdateWithoutPaymentsInput = {
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoliciesNestedInput
    riskPool?: RiskPoolUpdateOneRequiredWithoutPoliciesNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateWithoutPayoutsInput = {
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPoliciesInput
    riskPool: RiskPoolCreateNestedOneWithoutPoliciesInput
    policyTriggers?: PolicyTriggerCreateNestedManyWithoutPolicyInput
    payments?: PaymentCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutPayoutsInput = {
    id?: number
    userId: number
    riskPoolId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    policyTriggers?: PolicyTriggerUncheckedCreateNestedManyWithoutPolicyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutPayoutsInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutPayoutsInput, PolicyUncheckedCreateWithoutPayoutsInput>
  }

  export type RiskPoolCreateWithoutPayoutsInput = {
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    community: CommunityCreateNestedOneWithoutRiskPoolsInput
    eventType: EventTypeCreateNestedOneWithoutRiskPoolsInput
    policies?: PolicyCreateNestedManyWithoutRiskPoolInput
    capitalProviders?: CapitalProviderCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolUncheckedCreateWithoutPayoutsInput = {
    id?: number
    communityId: number
    eventTypeId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    policies?: PolicyUncheckedCreateNestedManyWithoutRiskPoolInput
    capitalProviders?: CapitalProviderUncheckedCreateNestedManyWithoutRiskPoolInput
  }

  export type RiskPoolCreateOrConnectWithoutPayoutsInput = {
    where: RiskPoolWhereUniqueInput
    create: XOR<RiskPoolCreateWithoutPayoutsInput, RiskPoolUncheckedCreateWithoutPayoutsInput>
  }

  export type PolicyTriggerCreateWithoutPayoutInput = {
    triggered?: boolean
    triggerCheckedAt?: Date | string
    policy: PolicyCreateNestedOneWithoutPolicyTriggersInput
    oracleData: OracleDataCreateNestedOneWithoutPolicyTriggersInput
  }

  export type PolicyTriggerUncheckedCreateWithoutPayoutInput = {
    id?: number
    policyId: number
    oracleDataId: number
    triggered?: boolean
    triggerCheckedAt?: Date | string
  }

  export type PolicyTriggerCreateOrConnectWithoutPayoutInput = {
    where: PolicyTriggerWhereUniqueInput
    create: XOR<PolicyTriggerCreateWithoutPayoutInput, PolicyTriggerUncheckedCreateWithoutPayoutInput>
  }

  export type PolicyTriggerCreateManyPayoutInputEnvelope = {
    data: PolicyTriggerCreateManyPayoutInput | PolicyTriggerCreateManyPayoutInput[]
    skipDuplicates?: boolean
  }

  export type PolicyUpsertWithoutPayoutsInput = {
    update: XOR<PolicyUpdateWithoutPayoutsInput, PolicyUncheckedUpdateWithoutPayoutsInput>
    create: XOR<PolicyCreateWithoutPayoutsInput, PolicyUncheckedCreateWithoutPayoutsInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutPayoutsInput, PolicyUncheckedUpdateWithoutPayoutsInput>
  }

  export type PolicyUpdateWithoutPayoutsInput = {
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoliciesNestedInput
    riskPool?: RiskPoolUpdateOneRequiredWithoutPoliciesNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutPolicyNestedInput
    payments?: PaymentUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutPayoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutPolicyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type RiskPoolUpsertWithoutPayoutsInput = {
    update: XOR<RiskPoolUpdateWithoutPayoutsInput, RiskPoolUncheckedUpdateWithoutPayoutsInput>
    create: XOR<RiskPoolCreateWithoutPayoutsInput, RiskPoolUncheckedCreateWithoutPayoutsInput>
    where?: RiskPoolWhereInput
  }

  export type RiskPoolUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: RiskPoolWhereInput
    data: XOR<RiskPoolUpdateWithoutPayoutsInput, RiskPoolUncheckedUpdateWithoutPayoutsInput>
  }

  export type RiskPoolUpdateWithoutPayoutsInput = {
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutRiskPoolsNestedInput
    eventType?: EventTypeUpdateOneRequiredWithoutRiskPoolsNestedInput
    policies?: PolicyUpdateManyWithoutRiskPoolNestedInput
    capitalProviders?: CapitalProviderUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolUncheckedUpdateWithoutPayoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutRiskPoolNestedInput
    capitalProviders?: CapitalProviderUncheckedUpdateManyWithoutRiskPoolNestedInput
  }

  export type PolicyTriggerUpsertWithWhereUniqueWithoutPayoutInput = {
    where: PolicyTriggerWhereUniqueInput
    update: XOR<PolicyTriggerUpdateWithoutPayoutInput, PolicyTriggerUncheckedUpdateWithoutPayoutInput>
    create: XOR<PolicyTriggerCreateWithoutPayoutInput, PolicyTriggerUncheckedCreateWithoutPayoutInput>
  }

  export type PolicyTriggerUpdateWithWhereUniqueWithoutPayoutInput = {
    where: PolicyTriggerWhereUniqueInput
    data: XOR<PolicyTriggerUpdateWithoutPayoutInput, PolicyTriggerUncheckedUpdateWithoutPayoutInput>
  }

  export type PolicyTriggerUpdateManyWithWhereWithoutPayoutInput = {
    where: PolicyTriggerScalarWhereInput
    data: XOR<PolicyTriggerUpdateManyMutationInput, PolicyTriggerUncheckedUpdateManyWithoutPayoutInput>
  }

  export type PolicyCreateManyUserInput = {
    id?: number
    riskPoolId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapitalProviderCreateManyUserInput = {
    id?: number
    riskPoolId: number
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
  }

  export type PolicyUpdateWithoutUserInput = {
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskPool?: RiskPoolUpdateOneRequiredWithoutPoliciesNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutPolicyNestedInput
    payments?: PaymentUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutPolicyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapitalProviderUpdateWithoutUserInput = {
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskPool?: RiskPoolUpdateOneRequiredWithoutCapitalProvidersNestedInput
  }

  export type CapitalProviderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapitalProviderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    riskPoolId?: IntFieldUpdateOperationsInput | number
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskPoolCreateManyCommunityInput = {
    id?: number
    eventTypeId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RiskPoolUpdateWithoutCommunityInput = {
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutRiskPoolsNestedInput
    policies?: PolicyUpdateManyWithoutRiskPoolNestedInput
    capitalProviders?: CapitalProviderUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutRiskPoolNestedInput
    capitalProviders?: CapitalProviderUncheckedUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolUncheckedUpdateManyWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventTypeId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskPoolCreateManyEventTypeInput = {
    id?: number
    communityId: number
    totalCapital?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RiskPoolUpdateWithoutEventTypeInput = {
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutRiskPoolsNestedInput
    policies?: PolicyUpdateManyWithoutRiskPoolNestedInput
    capitalProviders?: CapitalProviderUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolUncheckedUpdateWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policies?: PolicyUncheckedUpdateManyWithoutRiskPoolNestedInput
    capitalProviders?: CapitalProviderUncheckedUpdateManyWithoutRiskPoolNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutRiskPoolNestedInput
  }

  export type RiskPoolUncheckedUpdateManyWithoutEventTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
    totalCapital?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateManyRiskPoolInput = {
    id?: number
    userId: number
    coverageAmount: Decimal | DecimalJsLike | number | string
    premiumAmount: Decimal | DecimalJsLike | number | string
    coverageStart: Date | string
    coverageEnd: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapitalProviderCreateManyRiskPoolInput = {
    id?: number
    userId: number
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeDate?: Date | string
    createdAt?: Date | string
  }

  export type PayoutCreateManyRiskPoolInput = {
    id?: number
    policyId?: number | null
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PolicyUpdateWithoutRiskPoolInput = {
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoliciesNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutPolicyNestedInput
    payments?: PaymentUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutRiskPoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutPolicyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPolicyNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateManyWithoutRiskPoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    coverageAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    premiumAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    coverageStart?: DateTimeFieldUpdateOperationsInput | Date | string
    coverageEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapitalProviderUpdateWithoutRiskPoolInput = {
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCapitalProvidersNestedInput
  }

  export type CapitalProviderUncheckedUpdateWithoutRiskPoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapitalProviderUncheckedUpdateManyWithoutRiskPoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUpdateWithoutRiskPoolInput = {
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneWithoutPayoutsNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutPayoutNestedInput
  }

  export type PayoutUncheckedUpdateWithoutRiskPoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutPayoutNestedInput
  }

  export type PayoutUncheckedUpdateManyWithoutRiskPoolInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTriggerCreateManyPolicyInput = {
    id?: number
    oracleDataId: number
    triggered?: boolean
    triggerCheckedAt?: Date | string
    payoutId?: number | null
  }

  export type PaymentCreateManyPolicyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    paymentTxHash?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PayoutCreateManyPolicyInput = {
    id?: number
    riskPoolId?: number | null
    payoutAmount: Decimal | DecimalJsLike | number | string
    payoutTxHash?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PolicyTriggerUpdateWithoutPolicyInput = {
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oracleData?: OracleDataUpdateOneRequiredWithoutPolicyTriggersNestedInput
    payout?: PayoutUpdateOneWithoutPolicyTriggersNestedInput
  }

  export type PolicyTriggerUncheckedUpdateWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oracleDataId?: IntFieldUpdateOperationsInput | number
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payoutId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyTriggerUncheckedUpdateManyWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oracleDataId?: IntFieldUpdateOperationsInput | number
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payoutId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentUpdateWithoutPolicyInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUpdateWithoutPolicyInput = {
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskPool?: RiskPoolUpdateOneWithoutPayoutsNestedInput
    policyTriggers?: PolicyTriggerUpdateManyWithoutPayoutNestedInput
  }

  export type PayoutUncheckedUpdateWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    riskPoolId?: NullableIntFieldUpdateOperationsInput | number | null
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutPayoutNestedInput
  }

  export type PayoutUncheckedUpdateManyWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    riskPoolId?: NullableIntFieldUpdateOperationsInput | number | null
    payoutAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payoutTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OracleDataCreateManyOracleSourceInput = {
    id?: number
    timestamp: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OracleDataUpdateWithoutOracleSourceInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUpdateManyWithoutOracleDataNestedInput
  }

  export type OracleDataUncheckedUpdateWithoutOracleSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policyTriggers?: PolicyTriggerUncheckedUpdateManyWithoutOracleDataNestedInput
  }

  export type OracleDataUncheckedUpdateManyWithoutOracleSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTriggerCreateManyOracleDataInput = {
    id?: number
    policyId: number
    triggered?: boolean
    triggerCheckedAt?: Date | string
    payoutId?: number | null
  }

  export type PolicyTriggerUpdateWithoutOracleDataInput = {
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneRequiredWithoutPolicyTriggersNestedInput
    payout?: PayoutUpdateOneWithoutPolicyTriggersNestedInput
  }

  export type PolicyTriggerUncheckedUpdateWithoutOracleDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payoutId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyTriggerUncheckedUpdateManyWithoutOracleDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payoutId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyTriggerCreateManyPayoutInput = {
    id?: number
    policyId: number
    oracleDataId: number
    triggered?: boolean
    triggerCheckedAt?: Date | string
  }

  export type PolicyTriggerUpdateWithoutPayoutInput = {
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    policy?: PolicyUpdateOneRequiredWithoutPolicyTriggersNestedInput
    oracleData?: OracleDataUpdateOneRequiredWithoutPolicyTriggersNestedInput
  }

  export type PolicyTriggerUncheckedUpdateWithoutPayoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
    oracleDataId?: IntFieldUpdateOperationsInput | number
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTriggerUncheckedUpdateManyWithoutPayoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
    oracleDataId?: IntFieldUpdateOperationsInput | number
    triggered?: BoolFieldUpdateOperationsInput | boolean
    triggerCheckedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityCountOutputTypeDefaultArgs instead
     */
    export type CommunityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventTypeCountOutputTypeDefaultArgs instead
     */
    export type EventTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RiskPoolCountOutputTypeDefaultArgs instead
     */
    export type RiskPoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RiskPoolCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PolicyCountOutputTypeDefaultArgs instead
     */
    export type PolicyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PolicyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OracleSourceCountOutputTypeDefaultArgs instead
     */
    export type OracleSourceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OracleSourceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OracleDataCountOutputTypeDefaultArgs instead
     */
    export type OracleDataCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OracleDataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PayoutCountOutputTypeDefaultArgs instead
     */
    export type PayoutCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PayoutCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityDefaultArgs instead
     */
    export type CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventTypeDefaultArgs instead
     */
    export type EventTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RiskPoolDefaultArgs instead
     */
    export type RiskPoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RiskPoolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CapitalProviderDefaultArgs instead
     */
    export type CapitalProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapitalProviderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PolicyDefaultArgs instead
     */
    export type PolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PolicyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OracleSourceDefaultArgs instead
     */
    export type OracleSourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OracleSourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OracleDataDefaultArgs instead
     */
    export type OracleDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OracleDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PolicyTriggerDefaultArgs instead
     */
    export type PolicyTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PolicyTriggerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PayoutDefaultArgs instead
     */
    export type PayoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PayoutDefaultArgs<ExtArgs>

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